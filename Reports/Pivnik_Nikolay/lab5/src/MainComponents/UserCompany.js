import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const UserLocation= ({companyUrl}) => {

    return (
        <div>
            <h6 className='UserCompany'> <FontAwesomeIcon icon="building" /> {companyUrl}</h6>
        </div>
    )

}
export default UserLocation