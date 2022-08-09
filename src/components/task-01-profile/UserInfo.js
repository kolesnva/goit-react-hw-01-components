import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  StatItem,
  ItemSpan,
} from './UserInfoStyled';

export function UserInfo(user) {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Box className="profile">
      <Box className="description">
        <UserImage src={avatar} alt="user avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">{`@` + tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </Box>
      <UserStatsList className="stats">
        <StatItem>
          <ItemSpan className="label">Followers</ItemSpan>
          <ItemSpan className="quantity">{stats.followers}</ItemSpan>
        </StatItem>
        <StatItem>
          <ItemSpan className="label">Views</ItemSpan>
          <ItemSpan className="quantity">{stats.views}</ItemSpan>
        </StatItem>
        <StatItem>
          <ItemSpan className="label">Likes</ItemSpan>
          <ItemSpan className="quantity">{stats.likes}</ItemSpan>
        </StatItem>
      </UserStatsList>
    </Box>
  );
}

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
