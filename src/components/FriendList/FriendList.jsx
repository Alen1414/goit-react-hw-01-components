import css from './FriendList.module.css'


const FriendList =() =>{
    return(
        <li className={css.item}>
  <span className={css.status}></span>
  <img className={css.avatar} src="" alt="User avatar" width="48" />
  <p className={css.name}></p>
</li>
    );
};

export default FriendList;