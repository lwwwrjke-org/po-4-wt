
const Repo = ( {dataUser, userRepoData} ) => {
    return (
        <div class="repositorii">
            <div className="row">
                <div className="col-12">
                    <a href={`https://github.com/${dataUser.login}/${userRepoData.name}`}>
                        <div class="repoNames">
                            {userRepoData.name}
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                   <div class="description"> {userRepoData.description}</div>        
                    <p></p>
                    <p class="lang">{userRepoData.language}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo;