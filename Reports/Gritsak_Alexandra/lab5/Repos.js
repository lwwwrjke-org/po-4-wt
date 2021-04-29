import Repo from "./Repo"
import {useState} from "react"

const Repos = ( { repositoriu, dataUser } ) => {
    const [reposOfUser, setreposOfUser] = useState([])

    return (
        <div>
            <div className="row">
                {repositoriu.map(userRepoData => 
                    <div className={reposOfUser}> 
                        <Repo userRepoData={userRepoData} dataUser={dataUser} />
                    </div>
                )}
            </div>
            <div class="mainTable">
                <table>         
                    <div class="view">                          
                        <td> <button class="btn btn--primary button"  type="button" onClick={() => setreposOfUser("col-12")}>Line-by-line</button> </td>     
                        <td> <button class="btn btn--primary button"  type="button" onClick={() => setreposOfUser("col-6")}>Table</button>  </td>                                             
                    </div>
                </table>
            </div>
        </div>
    )
}

export default Repos; 