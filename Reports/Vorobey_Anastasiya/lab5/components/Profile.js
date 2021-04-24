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
                <b> {dataUser.followers} </b> followers 
                <b> {dataUser.following} </b> following
            </div>
            <div class="location"> {dataUser.location} </div>
        </div>
    )
}

export default Profile;
