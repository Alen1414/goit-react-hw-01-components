import FriendList from 'components/FriendList/FriendList';

function Friends ({items}) {

    return(
        <ul>
            {items.map(item =>(
                <li  key={item.id}>
                <FriendList
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                />
                </li>
            ))}
        </ul>
        
    );
}
export default Friends;