import Profile from "./Profile"
import Search from "./Search"
import Repositochki from "./Repositochki"
import {useState} from "react" //вместо super(props), позволяет использовать состояния без написания классов


const App = () => {
  const [dataUser, setdataUser] = useState({});
  const [repositoriu, setrepositoriu] = useState([{}]);
  const [viewElement, setViewElement] = useState(false); //Чтобы отобразить элемент только при выполнении заданного условия

  const funcSearchUser = (username) => {
      fetch(`https://api.github.com/users/${username}`)
          .then(reaction => reaction.json())
          .then(data => {
              setdataUser(data)
              setViewElement(true)
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
              <Search search={funcSearchUser} />
          <p></p>
          <div className="row">
              <div className="col-4">
                  {viewElement && <Profile dataUser={dataUser} viewElement={viewElement}/>}
              </div>
              <div className="col-8">
                  {viewElement && <Repositochki dataUser={dataUser} repositoriu={repositoriu} />}
              </div>
          </div>
      </div>
  )
}

export default App;