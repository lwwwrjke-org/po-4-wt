const Repo = ( { userRepoData, userAccountData } ) => {
    return (
        <div className="border border-secondary rounded p-4 mt-3" style={{height: 130}}>
            <div className="row">
                <div className="col col-12">
                    <a href={`https://github.com/${userAccountData.login}/${userRepoData.name}`}>
                        <h5>{userRepoData.name}</h5>
                    </a>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col col-12">
                    <p className="lead">{userRepoData.language}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo