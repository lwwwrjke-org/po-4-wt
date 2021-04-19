import Icon from "./Icon"

const IconText = ( { icon, text, isLink = false, target = "#" } ) => {
    return(
        <span className="lead">
            {
                isLink ? <span>
                        <Icon icon={icon}/>
                        <a href={target}>
                            <span className="ml-2">{text}</span>
                        </a>
                        </span>
                    :
                        <span>
                            <Icon icon={icon}/>
                            <span className="ml-2">{text}</span>
                        </span>
            }
        </span>
    )
}

export default IconText