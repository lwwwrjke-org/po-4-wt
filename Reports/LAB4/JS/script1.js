"use strict"
//selectors
const inputRequest = document.querySelector("#search")
const searchButton = document.querySelector(".searchButton")
const nameContainer = document.querySelector(".profile-name")

const unameContainer = document.querySelector(".profile-username")
const followContainer = document.querySelector(".profile-follow")
const imgContainer = document.querySelector(".profile-img")

const repContainer = document.querySelector(".profile-repos")

const fetchUsers = async (user) => {
    const api_call_profile = await fetch(`https://api.github.com/users/${user}`)
    const profileData = await api_call_profile.json()

    const api_call_repos = await fetch(`https://api.github.com/users/${user}/repos`)
    const repData = await api_call_repos.json()

    return {profileData, repData}
}

const displayData = () => {
    fetchUsers(inputRequest.value).then((response) => {
        console.log(response);

        unameContainer.innerHTML = `<span>${response.profileData.login}</span>`
        nameContainer.innerHTML = `<span>${response.profileData.name}</span>`

        followContainer.innerHTML = `<span>${response.profileData.followers}</span> followers`
        imgContainer.innerHTML = `<img class="main__profile-img" src="${response.profileData.avatar_url}"/>`

        let htmlTag = "<table border=\"0\" width=\"100%\" cellpadding=\"5\">"
        //output
        for (let i = 0; i < response.repData.length; i++) {
            if (i % 2 != 0) {
                continue
            }
            if (response.repData[i].description == null) {
                response.repData[i].description = " "
            }
            if (i < response.repData.length && (i + 1 == response.repData.length)) {
                htmlTag += "<tr>"
                htmlTag += `<th>${response.repData[i].name}<p class="description">${response.repData[i].description}</p><br></th>`
                htmlTag += "</tr>"
                break;
            }
            if (response.repData[i + 1].description == null) {
                response.repData[i + 1].description = " "
            }
            if (i % 2 == 0) {
                htmlTag += "<tr>"
                htmlTag += `<th>${response.repData[i].name}<p class="description">${response.repData[i].description}</p><br></th>`
                htmlTag += `<th>${response.repData[i + 1].name}<p class="description">${response.repData[i + 1].description}</p><br></th>`
                htmlTag += "</tr>"
            }

        }
        htmlTag += "</table>"
        repContainer.innerHTML = htmlTag
    })
}

searchButton.addEventListener("click", () => {
    displayData();
})