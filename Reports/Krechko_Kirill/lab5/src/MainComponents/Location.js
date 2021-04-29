import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Location= ({locationUrl,isLink = false, target = "#"}) => {

    return (
        <div>
            {
                isLink ?
                    <a href={target}> <h6 className='UserCompany'><FontAwesomeIcon icon="map-marker-alt"/> {locationUrl}</h6></a>
                    : <h6 className='UserCompany'><FontAwesomeIcon icon="map-marker-alt"/> {locationUrl}</h6>
            }
        </div>
    )

}
export default Location