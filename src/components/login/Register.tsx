import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Row, Col, message, Divider } from 'antd';
import { userService } from '@server/index';

function Register({ setShow }: any) {
  const [captcha, setCaptcha] = useState({
    code: '',
    key: '',
  });
  const formRef = useRef<any>();
  const timer = useRef<any>();
  const [time, setTime] = useState(60);

  const onFinish = async (values: any) => {
    const [res, err] = await userService.register({
      captchaCode: values.phoneCode,
      username: values.telphone,
      password: values.password,
    });
    if (res) {
      message.success('注册成功，请登录');
    } else {
      message.error(err);
    }
  };

  // 发送手机验证码
  const sendSMS = async () => {
    const { telphone, captchaCode } = formRef.current.getFieldsValue();
    if (!/^1\d{10}$/.test(telphone)) {
      message.error('请输入正确的手机号');
      return;
    }
    if (!captchaCode) {
      message.error('请输入图形验证码');
      return;
    }
    // 发送验证码
    const [res, err] = await userService.getRegisterSMS({
      mobile: telphone,
      captchaCode: captchaCode,
      captchaKey: captcha.key,
    });
    if (res) {
      message.success('验证码已发送，注意查收');
    } else {
      message.error(err);
    }

    let t = 60;
    timer.current = setInterval(() => {
      if (t - 1 === 0) {
        clearInterval(timer.current);
        setTime(60);
        return;
      }
      t--;
      setTime(t);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, []);

  useEffect(() => {
    getImageKey();
    console.log(captcha);
  }, []);

  const getImageKey = async () => {
    const [res] = await userService.getCaptcha();
    if (res) {
      setCaptcha({
        code: res.captcha_code,
        key: res.captcha_key,
      });
    }
  };

  return (
    <div className="login-register-mobile">
      <h1 className="login-register-title">账号注册</h1>
      <Form ref={formRef} name="basic" onFinish={onFinish}>
        <Form.Item name="telphone" rules={[{ required: true, message: '请输入手机号或邮箱账号' }]}>
          <Input placeholder="请输入手机号" prefix={<i className="webfont icow-yonghu" />} />
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={14}>
              <Form.Item name="captchaCode" noStyle rules={[{ required: true, message: '请输入图形验证码' }]}>
                <Input placeholder="图形验证码" prefix={<i className="webfont icow-yanzhengma" />} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <img onClick={getImageKey} style={{ width: 112, height: 35 }} src={captcha.code} alt="" />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={14}>
              <Form.Item name="phoneCode" noStyle rules={[{ required: true, message: '请输入手机验证码' }]}>
                <Input placeholder="手机验证码" prefix={<i className="webfont icow-yanzhengma" />} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Button style={{ height: 35 }} block={true} onClick={sendSMS} disabled={time !== 60}>
                {time === 60 ? '发送验证码' : `${time}秒后重试`}
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" prefix={<i className="webfont icow-mima" />} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block={true}>
          立即注册
        </Button>
      </Form>
      <div className="login-footer">
        <a onClick={() => setShow('forget_password')}>忘记密码</a>
        <Divider type="vertical" />
        <a onClick={() => setShow('login_mobile')}>账号登录</a>
      </div>
    </div>
  );
}

export default Register;
