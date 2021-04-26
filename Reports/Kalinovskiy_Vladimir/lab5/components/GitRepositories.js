import GitRepository from "./GitRepository"
import {useState} from "react"


const GitRepositories = ( { reps, user } ) => {
    const [reposOfUser, setreposOfUser] = useState([])

    return (
        <div>
            <div className="row">
                {reps.map(RepsInfo => 
                    <div className={reposOfUser}> <GitRepository RepsInfo={RepsInfo} user={user} /> </div>
                )}
            </div>
            <div class="mainTable">
                <table>         
                    <div class="v">   
                    <tr> <button class="btn"  type="button" onClick={() => setreposOfUser("col-6")}>View: Table</button>  </tr>      
                    <td> <button class="btn"  type="button" onClick={() => setreposOfUser("col-12")}>View: Line</button> </td>                                       
                    </div>
                </table>
            </div>
        </div>
    )
}

export default GitRepositories; 