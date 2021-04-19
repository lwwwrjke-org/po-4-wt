import {useState} from "react";

const Searcher = ( { onSearch } ) => {
    const [userInput, setUserInput] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if(!userInput) {
            alert("Please enter the login")
        }
        else {
            onSearch(userInput)
        }
    }

    return (
        <div className="container">
            <div className="form-group">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <label htmlFor="login">GitHub login</label>
                        <input type="text"
                               className="form-control"
                               name="login"
                               id="login-input"
                               placeholder="Your login"
                               onChange={ ( e) => setUserInput(e.target.value) }/>
                        <button className="btn btn-success mt-2" id="search-gh-account-btn" onClick={onSubmit}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searcher