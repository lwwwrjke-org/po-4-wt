const search = document.querySelector("#search");
const searchBTN = document.querySelector(".searchBTN");
const Name = document.querySelector(".name");
const login = document.querySelector(".username");
const follow = document.querySelector(".follow");
const avatar = document.querySelector(".img");
const public_rep = document.querySelector(".repos");

const fetchUsers = async (user) =>
{
    const api_call_profile = await fetch(`https://api.github.com/users/${user}`);
    const profileData = await api_call_profile.json();
    const api_call_repos = await fetch(`https://api.github.com/users/${user}/repos`);
    const reposData = await api_call_repos.json();
    return { profileData, reposData }
}

const showData = () =>
{
    fetchUsers(search.value).then((response) =>
    {
        console.log(response);

        Name.innerHTML = `<div>${response.profileData.name}</div>`;
        login.innerHTML = `<div>${response.profileData.login}</div>`;

        if(response.profileData.followers == "1")
        {follow.innerHTML = `<div>${response.profileData.followers} follower</div>`;}
        else
        {follow.innerHTML = `<div>${response.profileData.followers} followers</div>`;}

        avatar.innerHTML = `<img class="img" src="${response.profileData.avatar_url}"/>`;

        let html = "<p class=\"PopPubRep\">Popular public repositories:</p>";
        html += "<table>";

        for (let i = 0; i < response.reposData.length; i++)
        {
            if (i % 2 != 0){continue;}

            if (response.reposData[i].description == null)
            {response.reposData[i].description = " ";}

            if (i < response.reposData.length && (i + 1 == response.reposData.length))
            {
                html += "<tr>";
                html += `<td><div class="input_td"><p class="name_repositories">${response.reposData[i].name}</p><p class="describe">${response.reposData[i].description}</p><br></div></td>`;
                html += "</tr>";
                break;
            }

            if (response.reposData[i + 1].description == null)
            {response.reposData[i + 1].description = " ";}

            if (i % 2 == 0)
            {
                html += "<tr>";
                html += `<td><div class="input_td"><p class="name_repositories">${response.reposData[i].name}</p><p class="describe">${response.reposData[i].description}</p><br></div></td>`;
                html += `<td><div class="input_td"><p class="name_repositories">${response.reposData[i + 1].name}</p><p class="describe">${response.reposData[i + 1].description}</p><br></div></td>`;
                html += "</tr>";
            }
        }

        html += "</table>";
        public_rep.innerHTML = html;

    })
}

searchBTN.addEventListener("click", () =>{showData();})