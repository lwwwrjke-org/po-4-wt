import Avatar from "./Avatar"
import Icon from "./Icon"
import IconText from "./IconText"

const User = ( { userAccountData } ) => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Avatar src={userAccountData.avatar_url} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="font-weight-bold"> {userAccountData.name} </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4 className="text-muted"> {userAccountData.login} </h4>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col col-12">
                    <button className="btn btn-outline-dark btn-block">Follow</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <span className="lead">{userAccountData.bio}</span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <span className="lead">{userAccountData.blog}</span>
                </div>
            </div>
            <div className="row">
                <div className="col col-md-5">
                    <Icon icon="user"/>
                    <span className="text-secondary lead ml-2 mr-2">followers</span>
                    <span className="font-weight-bold lead">{userAccountData.followers}</span>
                </div>
                <div className="col col-md-5">
                    <Icon icon="user"/>
                    <span className="text-secondary lead ml-2 mr-2">following</span>
                    <span className="font-weight-bold lead">{userAccountData.following}</span>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col col-12">
                    { userAccountData.location && <IconText icon="home" text={userAccountData.location}/>}
                </div>
            </div>
            <div className="row">
                <div className="col col-12">
                    {userAccountData.company && <IconText icon="building" text={userAccountData.company}/>}
                </div>
            </div>
            <div className="row">
                <div className="col col-12">
                    {userAccountData.email && <IconText icon="envelop-o" text={userAccountData.email}/>}
                </div>
            </div>
        </div>
    )
}

export default User
