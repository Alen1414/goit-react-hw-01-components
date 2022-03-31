
import Profile from 'components/PageProfile/Profile';
import user from 'components/data/user.json';

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
  </div>
  );
};

