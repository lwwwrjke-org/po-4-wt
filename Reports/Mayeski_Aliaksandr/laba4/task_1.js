const inputValue = document.querySelector("#search")
const searchButton = document.querySelector(".searchButton")
const nameContainer = document.querySelector(".main__profile-name")
const unContainer = document.querySelector(".main__profile-username")
const followerContainer = document.querySelector(".main__profile-followers")
const imgContainer = document.querySelector(".main__profile-img")
const reposShowContainer = document.querySelector(".main__profile-repos_Show")

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}`)
    const data = await api_call.json()
    const api_call1 = await fetch(`https://api.github.com/users/${user}/repos`)
    const data1 = await api_call1.json()
    return { data, data1 }
}

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res)

        if (res.data.name == null) { }
        else {
            nameContainer.innerHTML = `<span class="main__profile-value">${res.data.name}</span>`
        }
        
        unContainer.innerHTML = `<span class="main__profile-value">${res.data.login}</span>`
        followerContainer.innerHTML = `<span class="main__profile-value" >${res.data.followers}</span> followers`
        imgContainer.innerHTML = `<img class="main__profile-img" src="${res.data.avatar_url}"/>`


        var HTML = "<table class=\"table  \">";
        for (let i = 0; i < res.data1.length && i < 6; i++) {
            HTML += `<tr>`
            HTML += `<td> ${res.data1[i].name} <br><br>`
            if (res.data1[i].description == null) {

            }
            else{
                HTML += ` ${res.data1[i].description}</td>`
            }
            HTML += `</tr>`  
        }
        HTML += "</table>";
        reposShowContainer.innerHTML = HTML
    })
}
searchButton.addEventListener("click", () => {
    showData()
})
