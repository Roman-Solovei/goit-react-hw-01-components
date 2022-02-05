import PropTypes from 'prop-types';
import s from './profile.module.css';


export default function Profile (props) {
    return <div className={s.profile}>
        <div className={s.description}>
            <img
                src={props.avatar}
                alt="User avatar"
                className={s.avatar}
            />
            <p className={s.name}>{ props.username}</p>
            <p className={s.tag}>@{props.tag}</p>
            <p className={s.location}>{props.location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.listItem}>
                <span className={s.profileLabel}>Followers</span>
                <span className={s.quantity}>{props.stats.followers}</span>
            </li>
            <li className={s.listItem}>
                <span className={s.profileLabel}>Views</span>
                <span className={s.quantity}>{props.stats.views}</span>
            </li>
            <li className={s.listItem}>
                <span className={s.profileLabel}>Likes</span>
                <span className={s.quantity}>{props.stats.likes}</span>
            </li>
        </ul>
    </div>
}


Profile.propTypes = {
    avatar : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    tag : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired,
    stats : PropTypes.object.isRequired    
}

// export default function Profile ({avatar, username, tag, location, stats}){
//     return <div className={s.profile}>
//     <div className={s.description}>
//       <img
//         src={avatar}
//         alt="User avatar"
//         className = {s.avatar}
//       />
//       <p className={s.name}>{username}</p>
//       <p className={s.tag}>@{tag}</p>
//       <p className={s.location}>{location}</p>
//     </div>
  
//     <ul className={s.stats}>
//       <li className={s.listItem}>
//         <span className={s{s.profileLabel}>Followers</span>
//         <span className={s.quantity}>{stats.followers}</span>
//       </li>
//       <li className={s.listItem}>
//         <span className={s{s.profileLabel}>Views</span>
//         <span className={s.quantity}>{stats.views}</span>
//       </li>
//       <li className={s.listItem}>
//         <span className={s{s.profileLabel}>Likes</span>
//         <span className={s.quantity}>{stats.likes}</span>
//       </li>
//     </ul> 
//   </div>
    
// }