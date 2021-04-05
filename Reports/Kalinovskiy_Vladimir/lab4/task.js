var form = document.getElementById("myForm")

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.getElementById("search").value
    console.log(search)
    document.getElementById("image").innerHTML=""
    getimg (search)
    .then((result)=>{
        console.log (result.response)
        console.log (result.result)
        if (result.response.ok==true){
        document.getElementById("image").innerHTML=`
            <p><img src="${result.result.avatar_url}" class="rounded-circle" width="300" height="300"/></p>`
        document.getElementById("username").innerHTML=`<h4>${result.result.login}</h4>`
        if (result.name!=null){
        document.getElementById("name").innerHTML=`<font face="Garamond" size='4'>${result.result.name}</font>`
        }
        document.getElementById("followers").innerHTML=`<font  face="Garamond" size='4'>${result.result.followers} followers</font>`
    }
    else {
        document.getElementById("image").innerHTML=""
        document.getElementById("username").innerHTML=`<h4>Что-то пошло не так</h4>`
        document.getElementById("name").innerHTML=""
        document.getElementById("followers").innerHTML=""
    }
    })
    var buf = ""
    getrep (search)
    .then ((result)=>{
        if (result.response.ok==true){
            for (i=0;i<result.result.length;i++){
                buf+="<p><div style='padding:13px' class='bg-danger text-white' >"+result.result[i].name+"</div></p>"
            }
            document.getElementById("repp").innerHTML=`${buf}`
        }
        else{
            document.getElementById("repp").innerHTML=""
        }
    })
})

async function getimg(search){
    url = "https://api.github.com/users/"+search
    const response = await fetch (url)
    const result = await response.json()
    return {result,response}
}

async function getrep(search){
    url = "https://api.github.com/users/"+search+"/repos"
    const response = await fetch (url)
    const result = await response.json()
    console.log (result)
    return {result, response}
}
