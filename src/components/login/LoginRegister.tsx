import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import LoginRegisterBox from './LoginRegisterBox';
import { user } from '@stores/user';
import { pubsub } from '@utils/index';

function LoginRegister({ children }: any) {
  const [visible, setVisible] = useState(false);

  const showVisible = () => {
    if (!user.info) {
      setVisible(true);
    } else {
      console.log(user.info);
      console.warn('已经登录过了');
      // history.push(location.pathname);
    }
  };

  useEffect(() => {
    pubsub.subscribe('showLoginModal', (mark: boolean) => {
      if (mark !== undefined) {
        setVisible(mark);
      } else {
        setVisible(true);
      }
    });
    return () => {
      pubsub.unsubscribe('showLoginModal');
    };
  }, []);

  return (
    <>
      {children ? <span onClick={showVisible}>{children}</span> : <a onClick={showVisible}>登录/注册</a>}
      <Modal
        bodyStyle={{ padding: 0 }}
        title={null}
        width={800 - 370}
        visible={visible}
        zIndex={2000}
        footer={null}
        destroyOnClose={true}
        onCancel={() => setVisible(false)}
      >
        {visible && <LoginRegisterBox />}
      </Modal>
    </>
  );
}

export default LoginRegister;
