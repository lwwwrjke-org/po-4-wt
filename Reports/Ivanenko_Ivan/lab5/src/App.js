import Searcher from "./components/Searcher"
import Repos from "./components/Repos"
import User from "./components/User"
import {useState} from "react"

const App = () => {
    const [userAccountData, setUserAccountData] = useState({})
    const [userReposData, setUserReposData] = useState([{}])
    const [showElement, setShowElement] = useState(false)

    const searchUser = (input) => {
        fetch(`https://api.github.com/users/${input}`)
            .then(response => response.json())
            .then(data => {
                setUserAccountData(data)
                setShowElement(true)
            })
        fetch(`https://api.github.com/users/${input}/repos`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUserReposData(data)
            }
        )
    }

    return (
        <div className="container justify-content-center">
            <div className="row mt-2">
                <Searcher onSearch={searchUser} />
            </div>
            <hr/>
            <div className="row">
                <div className="col col-lg-4">
                    {showElement && <User userAccountData={userAccountData} showElement={showElement}/>}
                </div>
                <div className="col col-lg-8">
                    {showElement && <Repos userReposData={userReposData} userAccountData={userAccountData}/>}
                </div>
            </div>
        </div>
    )
}

export default App;
