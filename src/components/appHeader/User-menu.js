import React from 'react';
import styles from './AppHeader.module.css';
import users from '../../data/users.json';

const UserMenu = () => {
  const user = users[0];
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
