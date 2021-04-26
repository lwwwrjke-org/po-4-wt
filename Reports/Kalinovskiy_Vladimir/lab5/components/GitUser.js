const GitUser = ( {user} ) => {
    return (
        <div>
            <div>  <img class="Img" src={user.avatar_url}/> </div>
            <div class="info"> 
            {user.name} 
            </div>
            <div class="SpeakNow"> 
            {user.login} 
            </div>
            <div class="language"> 
            {user.bio}
             </div>
            <div class="follow">                   
                <b> {user.followers} </b> followers 
                <b> {user.following} </b> following
            </div>
            <div class="location"> 
            {user.location} 
            </div>
        </div>
    )
}

export default GitUser;