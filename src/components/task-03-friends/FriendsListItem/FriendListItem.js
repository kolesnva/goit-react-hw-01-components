import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './FriendListItemStyled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsItem className="item">
      <Status className="status" isOnline={isOnline} />
      <Avatar className="avatar" src={avatar} />
      <Name className="name">{name}</Name>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
