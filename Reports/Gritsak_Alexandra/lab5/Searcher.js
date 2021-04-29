import {useState} from "react"
import style from "./all.css"

const Searcher = ({search}) => {
    const [nameOfUser, setnameOfUser] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
        if(nameOfUser) { 
            search(nameOfUser);
        }
    }


    return ( 
            <div class="enterField">
                <p><input type="text" autoComplete="off" placeholder="Enter git-username..." onChange={(event) => setnameOfUser(event.target.value)}/></p>
                <p><button class="btn btn--primary button" onClick={onSubmit}>Search...</button></p>
            </div>
    )
}

export default Searcher; 