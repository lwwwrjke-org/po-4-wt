let form = document.getElementById("searching");
form.addEventListener('submit',function(temp)
{
    temp.preventDefault();
    clean();

    let search = document.getElementById("result").value;
    fetch("https://api.github.com/users/" + search)
        .then((result) => result.json())
        .then((data)=>
        {
            if(data.followers == undefined){
                alert("No such user exists. Please try again");
                return 0;
            }

            document.getElementById("ava").innerHTML = ` 
            <img class ="round_avatar" src = "${data.avatar_url}"/>`

            document.getElementById("full_name").innerHTML = `<p>${data.name}</p>`;

            document.getElementById("login").innerHTML = `${data.login}`;

            document.getElementById("classDivFollowButton").innerHTML =
                `<button class="follow_button">Follow</button>`;

            document.getElementById("classDivThreeDotsButton").innerHTML =
                `<button class="threeDotsButton">...</button>`;

            if(data.bio !=null) document.getElementById("bio").innerHTML = `${data.bio}`;

            let statistic = data.followers + " followers • " + data.following + " following";

            document.getElementById("statistic").innerHTML =
                `<img class ="  followersImage" src = "followers.png"/>${statistic}`;

            if(data.location !=null)
                document.getElementById("location").innerHTML =
                    `<img class ="locationImage" src = "location.jpg"/> ${data.location}`;

            document.getElementById("email").innerHTML =
                `<img class ="emailImage" src = "imail.jpg"/> sign in to view email`;

            document.getElementById("overView").innerHTML =
                `<input type="button" value="Overview" class="button-overView" onclick = "overViewClick()"/>`

            document.getElementById("repositories").innerHTML =
                `<input type="button" value="Repositories" class="button-overView" onclick = "Other_Click()" />`;
            document.getElementById("projects").innerHTML =
                `<input type="button" value="Projects" class="button-overView" onclick = "Other_Click()"/>`;
            document.getElementById("packages").innerHTML =
                `<input type="button" value="Packages" class="button-overView" onclick = "Other_Click()" />`;
        })
})

function overViewClick(){
    document.getElementById("reposit").innerHTML +=
        `<div class="first_rep_col" id="first_rep_col"></div>
         <div class="second_rep_col" id="second_rep_col"></div>`

    let search = document.getElementById("result").value;
    fetch("https://api.github.com/users/"+ search + "/repos")

        .then((result) => result.json())
        .then((data)=>
        {
            var i = 0;
            while(data[i] != undefined){
                if(data[i].language == null) data[i].language = "";
                if(i % 2 == 0){
                    document.getElementById("first_rep_col").innerHTML +=
                        `<div class = "reposit" id= "${i}"></div>`
                    document.getElementById(i).innerHTML =
                        `<a href="${data[i].svn_url}">${data[i].name}</a>
                    <p>${data[i].language} stars ${data[i].stargazers_count}</p>`

                }else if((i % 2) == 1)
                {
                    document.getElementById("second_rep_col").innerHTML +=
                        `<div class = "reposit" id= "${i}" ></div>`;
                    document.getElementById(i).innerHTML =
                        `<a href="${data[i].svn_url}" >${data[i].name}</a>; 
                    <p>${data[i].language} stars ${data[i].stargazers_count}</p>`;
                }
                i++;
            }
        })
}

function clean() {
    document.getElementById("reposit").innerHTML = `<a></a>`;
}

function Other_Click() {
    document.getElementById("reposit").innerHTML = `<a></a>`;
}

