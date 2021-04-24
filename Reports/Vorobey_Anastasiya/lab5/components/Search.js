import {useState} from "react"
import style from "./all.css"

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
                <p><input type="text" autoComplete="off" placeholder="Enter the nickname..." onChange={(event) => setnameOfUser(event.target.value)}/></p>
                <p><button class="btn btn--primary button" onClick={onSubmit}>Тык-тык-тык</button></p>
            </div>
    )
}

export default Search; 