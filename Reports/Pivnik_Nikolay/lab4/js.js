var form = document.getElementById("searching")


form.addEventListener('submit',function(e){
 e.preventDefault()
 document.getElementById("location").innerHTML= `<a> </a>`
 document.getElementById("bio").innerHTML= `<a> </a>`
 document.getElementById("fullName").innerHTML= `<a> </a>`
 
 var search = document.getElementById("search").value
 fetch("https://api.github.com/users/"+search)
 .then((result) => result.json())
 .then((data)=> {

    if(data.followers == undefined){
        alert("Ошибка. Такой аккаунт не зарегистрирован!")
        return 0;
    }

    console.log(data)

     document.getElementById("avatar").innerHTML = ` 
     <img class ="round" src = "${data.avatar_url}"/>`

     if(data.name != null){
     document.getElementById("fullName").innerHTML = 
     `<p>${data.name}</p>`
     }

     document.getElementById("login").innerHTML = 
     `${data.login}`

     document.getElementById("classDivFollowButton").innerHTML = 
     `<button class="followButton">Follow</button>`

     document.getElementById("classDivThreeDotsButton").innerHTML = 
     `<button class="threeDotsButton">...</button>`

     if(data.bio !=null){
     document.getElementById("bio").innerHTML = 
     `${data.bio}`
    }
    var statistic = data.followers + " followers • " + data.following + " following" 

     document.getElementById("statistic").innerHTML = 
     `<img class ="  followersImage" src = "followers.png"/>${statistic}`

     if(data.location !=null){
        document.getElementById("location").innerHTML = 
        `<img class ="locationImage" src = "location.jpg"/> ${data.location}`
        
     }

     document.getElementById("email").innerHTML = 
        `<img class ="emailImage" src = "imail.jpg"/> sign in to view email`

     document.getElementById("overView").innerHTML = 
        `<input type="button" value="Overview" class="button-overView" />`
    document.getElementById("repositories").innerHTML = 
        `<input type="button" value="Repositories" class="button-overView" />`
        document.getElementById("projects").innerHTML = 
        `<input type="button" value="Projects" class="button-overView" />`
        document.getElementById("packages").innerHTML = 
        `<input type="button" value="Packages" class="button-overView" />`  
        
 })
 
})

