import css from './FriendList.module.css'
import PropTypes from 'prop-types';


const Friend =({avatar,name,isOnline}) =>{
    return(
        <section className={css.item}>
  <span className={css.status} style={{backgroundColor: isOnline ? 'green': 'red'}}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</section>
    );
};

export default Friend;

Friend.propTypes ={
    
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    
 };
//  <span className={css.status} isOnline type={{backgroundColor: isOnline ? 'green': 'red'}}>{isOnline}</span>
