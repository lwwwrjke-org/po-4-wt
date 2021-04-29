import SearchingForm from "../HeadingComponents/SearchingForm"

const Header = ({onAdd}) => {

    return (

        <div className=' row align-items-center' >
            <SearchingForm onAdd={onAdd}/>

        </div>
    )
}
export default Header

const headingStyle = {
    color: '#ffffff',
    backgroundColor: '#24292e',
}
