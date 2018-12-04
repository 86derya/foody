import React from 'react';

const UserMenu = ({ user }) => {
  const userAvatar = (
    <img src={user.avatar} alt="avatar" width="34 px" height="34 px" />
  );
  const userName = <span> {user.name} </span>;

  return (
    <div key={user.id}>
      {' '}
      {userAvatar} {userName}{' '}
    </div>
  );
};

export default UserMenu;
