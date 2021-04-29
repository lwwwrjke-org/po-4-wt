import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Stat= ({followersUrl,followingUrl}) => {

    return (
        <div>
            <h6 className='userStat'> <FontAwesomeIcon icon="user-friends" /> {followersUrl} followers {followingUrl} following</h6>
        </div>
    )

}
export default Stat