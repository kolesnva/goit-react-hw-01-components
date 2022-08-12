import PropTypes from 'prop-types';
import { List, FriendsItem, Status, Avatar, Name } from './FriendListStyled';

export function FriendList({ friends }) {
  return (
    <List className="list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem className="item" key={id}>
          <Status className="status" isOnline={isOnline} />
          <Avatar className="avatar" src={avatar} />
          <Name className="name">{name}</Name>
        </FriendsItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
