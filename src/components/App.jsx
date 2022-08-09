import { UserInfo } from './task-01-profile/UserInfo';
import user from './../data/user.json';

export const App = () => {
  return (
    <div>
      <UserInfo
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
