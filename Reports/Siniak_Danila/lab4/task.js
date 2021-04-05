const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const unameContainer = document.querySelector(".profile-username");
const followContainer = document.querySelector(".profile-follow");
const imgContainer = document.querySelector(".profile-img");
const reposContainer = document.querySelector(".profile-repos");

const fetchUsers = async (user) => {
    const api_call_profile = await fetch(`https://api.github.com/users/${user}`);
    const profileData = await api_call_profile.json();
    const api_call_repos = await fetch(`https://api.github.com/users/${user}/repos`);
    const reposData = await api_call_repos.json();
    return { profileData, reposData }
}

const showData = () => {
    fetchUsers(inputValue.value).then((response) => {
        console.log(response);

        unameContainer.innerHTML = `<span>${response.profileData.login}</span>`;
        nameContainer.innerHTML = `<span>${response.profileData.name}</span>`;
        followContainer.innerHTML = `<span>${response.profileData.followers}</span> followers`;
        imgContainer.innerHTML = `<img class="main__profile-img" src="${response.profileData.avatar_url}"/>`;

        let html = "<table border=\"0\" width=\"100%\" cellpadding=\"5\">";

        for (let i = 0; i < response.reposData.length; i++){
            if (i % 2 != 0){
                continue;
            }
            if (response.reposData[i].description == null){
                response.reposData[i].description = " ";
            }
            if (i < response.reposData.length && (i + 1 == response.reposData.length)){
                html += "<tr>";
                html += `<th>${response.reposData[i].name}<p class="description">${response.reposData[i].description}</p><br></th>`;
                html += "</tr>";
                break;
            }
            if (response.reposData[i + 1].description == null){
                response.reposData[i + 1].description = " ";
            }
            if (i % 2 == 0){
                html += "<tr>";
                html += `<th>${response.reposData[i].name}<p class="description">${response.reposData[i].description}</p><br></th>`;
                html += `<th>${response.reposData[i + 1].name}<p class="description">${response.reposData[i + 1].description}</p><br></th>`;
                html += "</tr>";
            };
        }
        html += "</table>";
        reposContainer.innerHTML = html;
    })
}

searchButton.addEventListener("click", () =>{
    showData();
})