import React from 'react';

import passProps from '../hocs/passProps';
import users from '../../data/users.json';
import formConfig from '../../configs/userAccountFormConfig.json';

import styles from './Account.module.css';

const Account = ({ onSubmit, user, onChange }) => {
  const input = formConfig.map(el => (
    <input
      key={el.name}
      className={styles.input}
      onChange={onChange}
      name={el.name}
      type={el.type}
      // value={[el.name]}
      autoComplete={el.autoComplete}
      placeholder={el.placeholder}
    />
  ));
  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <img className={styles.avatar} src={user.avatar} alt={user.name} />
        <span className={styles.name}>Name: {user.name}</span>
        <span className={styles.phone}>Phone: {user.phone}</span>
        <span className={styles.email}>@: {user.email}</span>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        {input}
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default passProps({ user: users[0] })(Account);
