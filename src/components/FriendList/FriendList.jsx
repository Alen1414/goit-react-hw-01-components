import FriendList from 'components/FriendList/FriendList';

function Friends ({items}) {

    return(
        {items.map(item =>(
            key={item.id}
            <FriendList
            
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
            />
        ))}
    )
}
export default Friends;