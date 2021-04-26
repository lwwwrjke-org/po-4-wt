import {useState} from "react"
import style from "./style.css"


const FindUser = ({search}) => {
    const [firstname, setnameOfUser] = useState("");
    const onSubmit = async(e) => {
        e.preventDefault();
        if(firstname) {search(firstname);} //если что-то введено, то поиск происходит, если нет - нет
    }


    return ( 
            <div class="input">
                <p><input type="text" autoComplete="off" placeholder="Input field" onChange={(e) => setnameOfUser(e.target.value)}/></p>
                <p class="but"><button class="btn" onClick={onSubmit}>Find</button></p>
            </div>
    )
}

export default FindUser; 