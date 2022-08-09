import PropTypes from 'prop-types';
import { Box } from '../Box';

import { UserImage } from './UserInfoStyled';
import { UserName } from './UserInfoStyled';
import { UserTag } from './UserInfoStyled';
import { UserLocation } from './UserInfoStyled';

export function UserInfo(user) {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Box>
      <UserImage src={avatar} alt="user avatar" className="avatar" />
      <UserName className="name">{username}</UserName>
      <UserTag>{`@` + tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Box>
  );
}
