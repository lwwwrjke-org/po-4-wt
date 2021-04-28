const ButtonsOnTop= ({onClick}) => {

    return (
        <div>
            <button className='iconButtons'>Overview</button>
            <button className='iconButtons'>Repositories</button>
            <button className='iconButtons'>Projects</button>
            <button className='iconButtons'>Packages</button>
            <div>
                <button className='changeView' onClick={onClick}>ChangeView</button>
            </div>
        </div>
    )
}

export default  ButtonsOnTop