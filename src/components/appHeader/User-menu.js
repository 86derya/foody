import React from 'react';
import styles from './AppHeader.module.css';

const UserMenu = ({ user }) => {
  const userAvatar = (
    <img className={styles.user_avatar} src={user.avatar} alt="avatar" />
  );
  const userName = <span className={styles.user_name}>{user.name}</span>;

  return (
    <div className={styles.user_menu__container} key={user.id}>
      {userAvatar}
      {userName}
    </div>
  );
};

export default UserMenu;
