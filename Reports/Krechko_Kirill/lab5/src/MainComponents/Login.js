const Login= ({LoginUrl,isLink = false, target = "#"}) => {

    return (

    <div>
        {
            isLink ?
                <a href={target}><p className='login'>{LoginUrl}</p></a>
                : <p className='login'>{LoginUrl}</p>
        }
    </div>

    )

}
export default Login