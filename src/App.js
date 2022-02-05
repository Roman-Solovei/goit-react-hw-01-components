import './App.css';
import Profile from './components/profile/profile'
import user from './components/profile/user.json';
import Statistics from './components/statistics/statistics';
import data from './components/statistics/data.json'
import friends from "./components/friendlist/friends.json";
import FriendList from './components/friendlist/friendlist';



console.log(friends)



export default function App() {

return <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
  
<FriendList friends={friends} />

</>
}








