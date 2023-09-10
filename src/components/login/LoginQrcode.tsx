import React, { Component } from 'react';
import { userService } from '@server/index';
import { pubsub } from '@utils/index';

interface IProps { }
interface IState {
  url: string;
  sn: string;
}

class LoginQrcode extends Component<IProps, IState> {

  timer: any;

  constructor(props: any) {
    super(props);
    this.state = {
      url: '',
      sn: '',
    };
  }

  // 轮询监测登录状态
  seekLogin = async (sn: string) => {
    this.timer = setTimeout(async () => {
      const [res] = await userService.seekWxLogin(sn);
      if (!res) {
        this.seekLogin(sn);
      } else {
        clearTimeout(this.timer);
        // 获取到token了
        userService._setRqHeaderToken(res.token);
        // 2、获取用户详情，设置x-user-info
        const [ress] = await userService.getUserDetail();
        if (ress) {
          pubsub.publish('showLoginModal', false);
          (window as any).RouterHistory.push('/manage');
        }
      }
    }, 3000);
  };

  doQrcode = async () => {
    const [res] = await userService.getWxQrcode();
    this.setState({
      url: res.url,
      sn: res.sn,
    });

    // 轮询登录
    this.seekLogin(res.sn);
  };

  componentDidMount() {
    this.doQrcode();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { url } = this.state;
    return (
      <div className="login-register-qrcode">
        <p>
          <i className="webfont icow-weixin-full" />
          微信扫描立即登录
        </p>
        <img style={{ width: 200 }} src={url || 'https://cdn.h5ds.com/static/images/qrcode-loading.png'} alt="" />
      </div>
    );
  }
}

export default LoginQrcode;
