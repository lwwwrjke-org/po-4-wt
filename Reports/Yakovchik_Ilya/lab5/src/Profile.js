import folowlogo from "./folws.png";
import "./all.css"

const Profile = ( {dataUser} ) => {
    return (
        <div>
            <div>
                <img class="mainImg" src={dataUser.avatar_url}/>
            </div>
            <div class="information"> {dataUser.name} </div>
            <div class="secondName"> {dataUser.login} </div>
            <div class="language"> {dataUser.bio} </div>
            <div class="follow">                   
                <b><img class="folimg" src={folowlogo}/> {dataUser.followers} </b> followers
                <b> {dataUser.following} </b> following
            </div>
            <div class="location"> {dataUser.location} </div>
        </div>
    )
}

export default Profile;