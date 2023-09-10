import React, { useState, useEffect, useRef } from 'react';
import { config } from '@config/index';
import { Divider, message } from 'antd';
import LoginQrcode from './LoginQrcode';
import LoginMobile from './LoginMobile';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import Register from './Register';
import { userService } from '@server/index';
import { withRouter } from 'react-router-dom';
import './login.less';

function LoginRegisterBox() {
  const [show, setShow] = useState('login_qrcode');

  const showOAuthWindow = () => {
    let url = `${config.apiHost}/account/login/provider/qq?type=login`;
    window.open(url, '', 'width=500,height=500,channelmode=yes');
  };

  const handlePostMessage = async (evt: any) => {
    if (evt.data.msgType !== 'oauth-login') {
      return;
    }
    const { provider, code } = evt.data;
    if (provider) {
      const hide = message.loading('登录中，请稍后');
      await userService.oauthLogin(code);
      hide();
      (window as any).RouterHistory.push(location.pathname);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handlePostMessage);
    return () => {
      window.removeEventListener('message', handlePostMessage);
    };
  });

  return (
    <div className="login-register">
      {/* <div className="login-register-info">
        <div className="login-register-info-box">
          <img src={config.logo} style={{ width: '80%' }} alt="" />
        </div>
      </div> */}
      <div className="login-register-form">
        <div className="login-register-tabs">
          {show === 'forget_password' && <ForgetPassword />}
          {show === 'reset_password' && <ResetPassword setShow={setShow} />}
          {show === 'login_qrcode' && <LoginQrcode />}
          {show === 'login_mobile' && <LoginMobile setShow={setShow} />}
          {show === 'register' && <Register setShow={setShow} />}
        </div>
        <Divider plain>其他登录方式</Divider>
        <div className="login-register-actions">
          <a onClick={() => setShow('login_mobile')}>
            <i className="webfont icow-shouji" />
            <span>手机/邮箱</span>
          </a>
          {/* <a onClick={showOAuthWindow}>
            <i className="webfont icow-qq1" />
            <span>QQ登录</span>
          </a> */}
          <a onClick={() => setShow('login_qrcode')}>
            <i className="webfont icow-xingzhuangjiehe" />
            <span>微信登录</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginRegisterBox);
