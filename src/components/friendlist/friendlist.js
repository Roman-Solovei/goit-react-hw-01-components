import PropTypes from 'prop-types';
import s from './friendlist.module.css';
import FriendListItem from './friendlistItem'



export default function FriendList({ friends }) {
    // console.log(friends.avatar)
    return <ul className={s.friendList}>
        {friends.map(friend => (
                    
            <FriendListItem
            key = {friend.id}
            avatar = {friend.avatar}
            name = {friend.name}
            isOnline = {friend.isOnline}            
            />
            
        ))
        }
    </ul>
}

FriendList.propTypes = {  
  friends : PropTypes.array,
}