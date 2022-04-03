import Friends from 'components/FriendList/Friend';

function Friend ({items}) {

    return(
        <ul>
            {items.map(item =>
                <li  key={item.id}>
                <Friends
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                />
                </li>
            )}
        </ul>
        
    )
}
export default Friend;

