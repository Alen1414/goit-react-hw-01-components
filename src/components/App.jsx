import Profile from 'components/PageProfile/Profile';
import user from 'components/data/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from 'components/data/data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from 'components/data/friends.json';

import TransactionHistory from 'components/TransactionHistory/TransHistList';
import transactions from 'components/data/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
      
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" 
 
 stats={data} />
 

<FriendList friends={friends} 

/>

<TransactionHistory items={transactions}
 />
  </div>
  );
};