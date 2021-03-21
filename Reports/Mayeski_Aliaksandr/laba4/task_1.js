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

        nameContainer.innerHTML = `<span class="main__profile-value">${res.data.name}</span>`
        unContainer.innerHTML = `<span class="main__profile-value">${res.data.login}</span>`
        followerContainer.innerHTML = `<span class="main__profile-value" >${res.data.followers}</span> followers`
        imgContainer.innerHTML = `<img class="main__profile-img"  src="${res.data.avatar_url}"/>`


        var HTML = "<table class=\"table11 \">";
        for (let i = 0; i < res.data1.length; i+=2) {
            HTML += `<tr>`
            HTML += `<td> ${res.data1[i].name} <br><br> ${res.data1[i].description}</td>
            <td> ${res.data1[i + 1].name} <br><br> ${res.data1[i+1].description}</td>`   
            HTML += `</tr>`  
        }
        HTML += "</table>";
        reposShowContainer.innerHTML = HTML
    })
}
searchButton.addEventListener("click", () => {
    showData()
})