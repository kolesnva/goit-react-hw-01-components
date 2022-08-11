import PropTypes from 'prop-types';
import {
  FriendList,
  FriendsItem,
  Status,
  Avatar,
  Name,
} from './FriendListStyled';

export function FriendList() {}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
