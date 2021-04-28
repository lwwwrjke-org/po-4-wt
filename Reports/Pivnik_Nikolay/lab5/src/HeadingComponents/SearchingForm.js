import {useState} from "react"
import PropTypes from 'prop-types'

const SearchingForm= ({onAdd}) => {
    const [text,setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please enter login!')
            return
        }
        onAdd({text})
    }
    return (
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7"  >
            <form  autoComplete="off" onSubmit={onSubmit}>
                <input className='inputStyle' type="text" id="search"
                       value={text} onChange={(e)=>setText(e.target.value)}
                       placeholder="Searching for login..." />
                <button id='search' className='headingAddButton' >Search</button>
            </form>
        </div>
    )
}
export default SearchingForm

SearchingForm.proTypes = {
    onAdd : PropTypes.func,
}