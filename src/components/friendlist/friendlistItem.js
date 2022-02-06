import PropTypes from 'prop-types';
import s from './friendlist.module.css';


export default function FriendListItem({ avatar, name, isOnline, id }) {
    // console.log({id})
    return <li key={id} className={s.item}>
            <span className = {s[isOnline]}>{isOnline}</span>            
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
            </li>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}