import UserImage from "../MainComponents/UserImage"
import UserName from "../MainComponents/UserName"
import UserLogin from "../MainComponents/UserLogin"
import UserButtons from "../MainComponents/UserButtons"
import UserStat from "../MainComponents/UserStat"
import UserLocation from "../MainComponents/UserLocation"
import UserCompany from "../MainComponents/UserCompany"
import UserEmail from "../MainComponents/UserEmail"

const MainInfo = ({userAccountData}) => {

    return (
        <div className = "col-xs-12 col-sm-12 col-md-5 col-lg-4">

            <UserImage ImageUrl={userAccountData.avatar_url} />
            {userAccountData.name && <UserName NameUrl={userAccountData.name}/>}
            <UserLogin LoginUrl={userAccountData.login}/>
            <UserButtons/>
            <UserStat followersUrl={userAccountData.followers} followingUrl={userAccountData.following}/>
            {userAccountData.company && <UserCompany companyUrl={userAccountData.company}/>}
            {userAccountData.location && <UserLocation locationUrl={userAccountData.location}/>}
            <UserEmail/>
        </div>

    )
}
export default MainInfo