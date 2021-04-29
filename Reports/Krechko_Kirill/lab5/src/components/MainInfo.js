import Image from "../MainComponents/Image"
import Name from "../MainComponents/Name"
import Login from "../MainComponents/Login"
import Buttons from "../MainComponents/Buttons"
import Stat from "../MainComponents/Stat"
import Location from "../MainComponents/Location"
import UserCompany from "../MainComponents/Company"
import UserEmail from "../MainComponents/Email"

const MainInfo = ({userAccountData}) => {

    return (
            <div className = "col-xs-12 col-sm-12 col-md-5 col-lg-4">

                <Image ImageUrl={userAccountData.avatar_url} />
                {userAccountData.name && <Name NameUrl={userAccountData.name}/>}
                <Login LoginUrl={userAccountData.login}/>
                <Buttons/>
                <Stat followersUrl={userAccountData.followers} followingUrl={userAccountData.following}/>
                {userAccountData.company && <UserCompany companyUrl={userAccountData.company}/>}
                {userAccountData.location && <Location locationUrl={userAccountData.location}/>}
                <UserEmail/>
            </div>

    )
}
export default MainInfo