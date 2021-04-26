import FindUser from "./components/FindUser"
import GitRepositories from "./components/GitRepositories"
import GitUser from "./components/GitUser"
import {useState} from "react" 


const App = () => {
  const [user, setdataUser] = useState({});
  const [reps, setreps] = useState([{}]);
  const [showElement, setShowElement] = useState(false); //Отображает элемент только при выполнении заданного условия

  const funcSearchUser = (nickname) => {
      fetch(`https://api.github.com/users/${nickname}`)
          .then(reaction => reaction.json())
          .then(data => {
              setdataUser(data)
              setShowElement(true)
          })
      fetch(`https://api.github.com/users/${nickname}/repos`)
          .then(reaction => reaction.json())
          .then(data => {
              setreps(data)
          }
      )
  }

  return (
      <div className="container justify-content-center">
              <FindUser search={funcSearchUser} />
         <p></p>
          <div className="row">
              
              <div className="col-8">
                  {showElement && <GitRepositories user={user}  reps={reps} />}
              </div>
              <div className="col-4">
                  {showElement && <GitUser user={user} showElement={showElement}/>}
              </div>
          </div>
      </div>
  )
}

export default App;