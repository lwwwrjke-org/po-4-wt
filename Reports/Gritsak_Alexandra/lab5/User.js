const User = ( {dataUser} ) => {
    return (
        <div>
            <div>
                <img class="mainImg" src={dataUser.avatar_url}/>
            </div>
            <div class="information"> {dataUser.name} </div>
            <div class="secondName"> {dataUser.login} </div>
            <div class="language"><i class="far fa-star"></i>{dataUser.bio} </div>
            <div class="follow">
            <i class="fas fa-user-friends"></i>                  
                <b> {dataUser.followers} </b> followers 
                <b> {dataUser.following} </b> following
                <i class="fas fa-user-plus"></i>
            </div>
            <div class="location"><i class="fas fa-map-marker-alt"></i> {dataUser.location} </div>
        </div>
    )
}

export default User;
