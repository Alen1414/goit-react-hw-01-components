import css from './FriendList.module.css'


const Friend =({avatar,name,isOnline}) =>{
    return(
        <section className={css.item}>
  <span className={css.status}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</section>
    );
};

export default Friend;