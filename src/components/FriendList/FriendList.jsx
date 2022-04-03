import Friend from 'components/FriendList/Friend';

function FriendList ({friends}) {

    return(
        <ul>
            {friends.map(({id,avatar,name,isOnline }) =>
                <li  key={id}>
                <Friend
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
                </li>
            )}
        </ul>
        
    )
}
export default FriendList;

