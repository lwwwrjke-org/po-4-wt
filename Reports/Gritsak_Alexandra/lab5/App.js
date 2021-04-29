import Searcher from "./components/Searcher"
import Repos from "./components/Repos"
import User from "./components/User"
import {useState} from "react" 


const App = () => {
  const [dataUser, setdataUser] = useState({});
  const [repositoriu, setrepositoriu] = useState([{}]);
  const [showElement, setShowElement] = useState(false); 

  const funcSearchUser = (username) => {
      fetch(`https://api.github.com/users/${username}`)
          .then(reaction => reaction.json())
          .then(data => {
              setdataUser(data)
              setShowElement(true)
          })
      fetch(`https://api.github.com/users/${username}/repos`)
          .then(reaction => reaction.json())
          .then(data => {
              setrepositoriu(data)
          }
      )
  }

  return (
      <div className="container justify-content-center">
              <Searcher search={funcSearchUser} />
         <p></p>
          <div className="row">
              <div className="col-4">
                  {showElement && <User dataUser={dataUser} showElement={showElement}/>}
              </div>
              <div className="col-8">
                  {showElement && <Repos dataUser={dataUser}  repositoriu={repositoriu} />}
              </div>
          </div>
      </div>
  )
}

export default App;