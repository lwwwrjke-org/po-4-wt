import ButtonsOnTop from "../RepositoriesComponents/ButtonsOnTop"
import {useState} from "react"
const Repositories = ({userReposData}) => {

    const [isLineByLine,setIsLineByLine] = useState(false)
    const [displayStyle, setDisplayStyle] = useState("col col-5 repo")
    const onClick = () =>{
        if(isLineByLine === false){
            setIsLineByLine(true)
            setDisplayStyle("col col-12 repo")
        }else{
            setIsLineByLine(false)
            setDisplayStyle("col col-5 repo")
        }

    }

    return (
        <div className = "col-xs-12 col-sm-12 col-md-7 col-lg-8">
            <ButtonsOnTop onClick={onClick}/>

            <div className="row ">
                {userReposData.map((userRepoData => <div className={displayStyle}>
                    <a href={userRepoData.svn_url}>{userRepoData.name}</a>
                    <h6>{userRepoData.language}</h6>
                    <h6>Stars: {userRepoData.stargazers_count}</h6>
                </div>))}
            </div>
        </div>

    )
}

export default Repositories