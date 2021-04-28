import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UserStat= ({followersUrl,followingUrl}) => {

    return (
        <div>
            <h6 className='userStat'> <FontAwesomeIcon icon="user-friends" /> {followersUrl} followers {followingUrl} following</h6>
        </div>
    )

}
export default UserStat