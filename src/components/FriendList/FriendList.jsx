import Friend from 'components/FriendList/Friend';

function FriendList ({items}) {

    return(
        <ul>
            {items.map(item =>
                <li  key={item.id}>
                <Friend
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                />
                </li>
            )}
        </ul>
        
    )
}
export default FriendList;

