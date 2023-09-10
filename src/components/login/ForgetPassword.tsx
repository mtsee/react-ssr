import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { userService } from '@server/index';

function LoginQrcode() {
  const [captcha, setCaptcha] = useState({
    key: '',
    code: ''
  });
  const formRef = useRef<any>(null);

  // 倒计时60s
  const [time, setTime] = useState(60);

  const onFinish = async (values: any) => {
    console.log(values);
    // 修改密码
    const [res, err] = await userService.findPassword({
      mobile: values.phone,
      password: values.password,
      code: values.phoneCode,
    });
    if (err) {
      message.success('修改密码成功！请使用新密码登录');
    }

    // setShow('reset_password');
  };

  // phone, email
  const [type, setType] = useState('phone');

  const timer = useRef<any>();

  // 发送手机验证码
  const sendSMS = async () => {
    const phoneNumber = formRef.current.getFieldValue('phone');
    const captchaCode = formRef.current.getFieldValue('captchaCode');
    if (!/^1\d{10}$/.test(phoneNumber)) {
      message.error('请输入正确的手机号');
      return;
    }
    if (!captchaCode) {
      message.error('请输入图形验证码');
      return;
    }
    // 发送验证码
    const [res, err] = await userService.getCodeResetPassword({
      mobile: phoneNumber,
      captchaCode,
      captchaKey: captcha.key,
    });
    if (err) {
      message.error(err.error_code.message);
      return;
    }

    message.success('发送成功，请查收');

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
    <div className="login-register-forgetpassword">
      <h1 className="login-register-title">找回密码</h1>
      <Form name="basic" onFinish={onFinish} ref={formRef}>
        {type === 'phone' && (
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1\d{10}$/, message: '请输入正确的手机号' },
            ]}
          >
            <Input placeholder="请输入手机号" prefix={<i className="webfont icow-yonghu" />} />
          </Form.Item>
        )}
        {type === 'email' && (
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              {
                type: 'email',
                message: '请输入正确的邮箱',
              },
            ]}
          >
            <Input placeholder="请输入邮箱" prefix={<i className="webfont icow-youxiang" />} />
          </Form.Item>
        )}
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
        {type === 'phone' && (
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
        )}
        {type === 'phone' && (
          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入新密码' },
              { pattern: /^[a-zA-Z0-9_~!@#$%^&*.]{6,20}$/, message: '密码长度最少6位最多20位' },
            ]}
          >
            <Input.Password placeholder="请输入新密码" prefix={<i className="webfont icow-mima" />} />
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            重置密码
          </Button>
        </Form.Item>
      </Form>
      {type === 'phone' && <a onClick={() => setType('email')}>通过邮箱找回密码</a>}
      {type === 'email' && <a onClick={() => setType('phone')}>通过手机找回密码</a>}
    </div>
  );
}

export default LoginQrcode;
