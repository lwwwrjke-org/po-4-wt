const Name= ({NameUrl,isLink = false, target = "#"}) => {

    return (
        <div>
            { isLink ?
                <a href={target}><p>{NameUrl}</p></a>
                : <p>{NameUrl}</p>
            }
        </div>
    )

}
export default Name