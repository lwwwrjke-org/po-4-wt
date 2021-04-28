import {useState} from "react"
import findlogo from "./find.png";
import "./all.css"


//const [value, setValue] = useState('')
const Search = ({search}) => {
    const [nameOfUser, setnameOfUser] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
        if(nameOfUser) { //если что-то введено, то ищем, а если нет, то ничего не происходит
            search(nameOfUser);
        }
    }

//обработчик событий,  который обновляет состояние при изменении входного значения: const onChange = event => setValue(event.target.value);
    return ( //возвращает один блок, поэтому всё в див обязательно
            <div class="enterField">
                <p><input type="text" autoComplete="off" placeholder="Введите никнейм" onChange={(event) => setnameOfUser(event.target.value)}/></p>
                <p> <img class="folimg" src={findlogo}/> <button class="sbtn btn--primary button" onClick={onSubmit}>Мне повезёт</button></p>
            </div>
    )
}

export default Search; 