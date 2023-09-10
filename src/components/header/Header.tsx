import React from 'react';
import styles from './header.module.less';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { user } from '@stores/user';

const Header = () => {
  return (
    <div className={styles.header}>
      header &nbsp;
      <Link to="/">home</Link>
      &nbsp;
      <Link to="/manage">manage</Link>
      &nbsp;
      {user.info ? '已登录' : '未登录'}
    </div>
  );
}

export default observer(Header);
