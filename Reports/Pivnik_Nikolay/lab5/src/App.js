import {useState} from "react"
import Header from "./components/Header"
import MainInfo from "./components/MainInfo"
import Repositories from "./components/Repositories"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding,faUserFriends,faMapMarkerAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'


function App() {
    library.add(faBuilding,faUserFriends,faMapMarkerAlt,faEnvelope)

    const [userAccountData, setUserAccountData] = useState({})
    const [userReposData, setUserReposData] = useState([{}])
    const [isUserFind,setIsUserFind] = useState(false)


    const addlogin = (login) =>{
        fetch(`https://api.github.com/users/${login.text}`)
            .then(result=> result.json())
            .then((data) => {
                if(data.message === "Not Found") {
                    alert("Error!No such account is registered!")
                }
                else{
                    setUserAccountData(data)
                    console.log(data)
                }
            })

        fetch(`https://api.github.com/users/${login.text}/repos`)
            .then(result=> result.json())
            .then((data) => {
                if(data.message !== "Not Found") {
                    setUserReposData(data)
                    console.log(data)
                    setIsUserFind(true)
                }

            })


    }

    return (
        <div className="container-fluid">
            <Header onAdd={addlogin}/>
            <div className='row container '>
                {isUserFind && <MainInfo userAccountData ={userAccountData}/>}
                {isUserFind && <Repositories userReposData={userReposData}/>}
            </div>
        </div>
    );
}

export default App;
