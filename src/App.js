import './App.css';
import Profile from './components/profile/profile'
import user from './components/profile/user.json';









export default function App() {

return <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>



</>
}








