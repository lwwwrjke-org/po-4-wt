const GitRepository = ( {user, RepsInfo} ) => {
    return (
        <div class="repos">
            <div className="row">
                <div className="col-12">
                    <a href={`https://github.com/${user.login}/${RepsInfo.name}`}>
                        <div class="repoNames">
                            {RepsInfo.name}
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">      
                    <p></p>
                    <p class="language2">{RepsInfo.language}</p>
                </div>
            </div>
        </div>
    )
}

export default GitRepository;