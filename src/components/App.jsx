import { UserInfo } from './task-01-profile/UserInfo';
import { Statistics } from './task-02-stats/DownloadStats';
import { FriendList } from './task-03-friends/FriendList';
import { TransactionHistory } from './task-04-transaction-history/Transactions';
import user from './../data/user.json';
import data from './../data/data.json';
import friends from './../data/friends.json';
import transactions from './../data/transactions.json';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
