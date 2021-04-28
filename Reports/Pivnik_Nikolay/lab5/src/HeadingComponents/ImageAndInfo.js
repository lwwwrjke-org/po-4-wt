import Logo from '../git_logo.jpg'
const ImageAndInfo = () => {

    return (
        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5"  >
            <img src={Logo} className='image' alt="" pad/>
            <b >Web lab 5 Pivnik</b>
        </div>
    )
}
export default ImageAndInfo