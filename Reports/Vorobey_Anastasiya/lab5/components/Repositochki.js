import {useState} from "react"

//const [value, setValue] = useState('')
//mmap - функция используется для перебора массива и манипулирования или изменения элементов данных
//className={reposOfUser} в сетРепосОфЮзер передаем параметр, он устанавливается в репосОфЮзер и передается в классНэйм в качестве стиля
const Repositochki = ( {dataUser, repositoriu} ) => {
    const [reposOfUser, setreposOfUser] = useState([])

    return (
        <div>
            <div className="row">
                {repositoriu.map(userRepoData => 
                    <div className={reposOfUser}> 
                        <div class="repositorii">
                            <div className="row">
                                <div className="col-12">
                                    <a href={`https://github.com/${dataUser.login}/${userRepoData.name}`}>
                                        <div class="repoNames"> {userRepoData.name} </div>
                                    </a>
                                    <div class="description"> {userRepoData.description}</div>        
                                    <p></p>
                                    <p class="lang">{userRepoData.language}</p>
                                </div>
                            </div>
                        </div>
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

export default Repositochki; 