import Repo from "./Repo"
import {useState} from "react"

const Repos = ( { userReposData, userAccountData } ) => {
    const [reposDisplayStyle, setReposDisplayStyle] = useState("col-12")

    return (
            <div>
                <div className="row">
                    <div className="col col-8">
                        <h4>Public repositories</h4>
                    </div>
                    <div className="col col-4">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-success" onClick={() => setReposDisplayStyle("col-12")}>
                                <input type="radio" name="line-by-line"/>
                                Lines
                            </label>
                            <label className="btn btn-success" onClick={() => setReposDisplayStyle("col-6")}>
                                <input type="radio" name="table"/>
                                Table
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12">
                        <div className="row">
                            {userReposData.map((userRepoData => <div className={reposDisplayStyle}><Repo userRepoData={userRepoData} userAccountData={userAccountData} /></div>))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Repos