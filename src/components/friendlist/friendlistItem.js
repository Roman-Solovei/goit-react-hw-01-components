import PropTypes from 'prop-types';
import s from './friendlist.module.css';


export default function FriendListItem({ avatar, name, isOnline }) {
    return <li className={s.item}>
            <span className={s.status}>{isOnline}</span>            
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
            </li>
}