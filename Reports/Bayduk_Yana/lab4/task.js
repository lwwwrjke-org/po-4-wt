function lab4(GH_login = "", GH_token = "") {
    let url = `https://api.github.com/users/${GH_login}`;
    fetch(url)
        .then(responseUsers => responseUsers.json())
        .then((dataUsers) => {
            if (dataUsers['message']) {
                alert(dataUsers['message']);
            }
            return dataUsers;
        })
        .then((dataUsers) => {
            // b-profile
            let avatar_url_html_id = 'GH__avatar_url';
            if (document.getElementById(avatar_url_html_id)) {
                document.getElementById(avatar_url_html_id).innerHTML
                    = `<img src="${dataUsers['avatar_url']}" alt="" />`;
            } else {
                console.error(`Not found id="${avatar_url_html_id}"`);
            }

            let name_html_id = 'GH__name';
            if (document.getElementById(name_html_id)) {
                document.getElementById(name_html_id).innerHTML
                    = dataUsers['name'];
            } else {
                console.error(`Not found id="${name_html_id}"`);
            }

            let login_html_id = 'GH__login';
            if (document.getElementById(login_html_id)) {
                document.getElementById(login_html_id).innerHTML
                    = dataUsers['login'];
            } else {
                console.error(`Not found id="${login_html_id}"`);
            }
            // end b-profile
            return dataUsers;
        })
        .then((dataUsers) => {
            // b-stats
            let followers_html_id = 'GH__followers';
            if (document.getElementById(followers_html_id) != undefined) {
                document.getElementById(followers_html_id).innerHTML = dataUsers['followers'];
            } else {
                console.error(`Not found id="${followers_html_id}"`);
            }

            let following_html_id = 'GH__following';
            if (document.getElementById(following_html_id) != undefined) {
                document.getElementById(following_html_id).innerHTML = dataUsers['following'];
            } else {
                console.error(`Not found id="${following_html_id}"`);
            }
            // end b-stats
            return dataUsers;
        })
        // Get info about followers
        .then((dataUsers) => {
            fetch(dataUsers['followers_url'])
                .then(responseFollowersUrl => responseFollowersUrl.json())
                .then(dataFollowersUrl => {
                    if (dataFollowersUrl['message']) {
                        alert(dataFollowersUrl['message']);
                    }

                    let html = '';
                    for (let i = 0; i < dataFollowersUrl.length; i++) {
                        html +=
                            `<div class="b-followers__b-follower">`
                            + `<div class="b-followers__img">`
                            + `<img src="${dataFollowersUrl[i]['avatar_url']}" alt="${dataFollowersUrl[i]['login']}" />`
                            + `</div>`
                            + `<div class="b-followers__info">`
                            + `<a href="${dataFollowersUrl[i]['html_url']}">${dataFollowersUrl[i]['login']}</a>`
                            + `</div>`
                            + `</div>`
                            + `</div>`;
                    }

                    let followers_html_id = 'GH__followers_url';
                    if (document.getElementById(followers_html_id) != undefined) {
                        document.getElementById(followers_html_id).innerHTML = html;
                    } else {
                        console.error(`Not found id="${followers_html_id}"`);
                    }

                    return dataFollowersUrl;
                })
            return dataUsers;
        })
        //Get info about repositories
        .then((dataUsers) => {
            fetch(dataUsers['repos_url'])
                .then(responseReposUrl => responseReposUrl.json())
                .then(dataReposUrl => {
                    if (dataReposUrl['message']) {
                        alert(dataReposUrl['message']);
                    }

                    let html = '';
                    for (let i = 0; i < dataReposUrl.length; i++) {
                        html +=
                            `<div class="b-repos__repository">`
                            + `<div class="b-repos__name">`
                            + `<a href="${dataReposUrl[i]['html_url']}">${dataReposUrl[i]['name']}</a>`
                            + `</div>`
                            + `<div class="b-repos__description">`
                            + `${dataReposUrl[i]['description'] == null ? '' : dataReposUrl[i]['description']}`
                            + `</div>`
                            + `</div>`;
                    }

                    let repos_html_id = 'GH__repos_url';
                    if (document.getElementById(repos_html_id) != undefined) {
                        document.getElementById(repos_html_id).innerHTML = html;
                    } else {
                        alert(`Not found id="${repos_html_id}"`);
                    }

                    return dataReposUrl;
                })
            return dataUsers;
        });
}

let lab4_button_html_id = 'lab4__button';
if (document.getElementById(lab4_button_html_id) != undefined) {
    document.getElementById(lab4_button_html_id).onclick = function () {
        //get login
        let login_html_id = 'lab4__login-input';
        let GH_login = '';
        if (document.getElementById(login_html_id) != undefined) {
            GH_login = document.getElementById(login_html_id).value;
        } else {
            alert(`Not found id="${login_html_id}"`);
        }
        let token_html_id = 'lab4__token-input';
        //get token
        let GH_token = '';
        if (document.getElementById(token_html_id) != undefined) {
            GH_token = document.getElementById(token_html_id).value;
        } else {
            alert(`Not found id="${token_html_id}"`)
        }
        //
        lab4(GH_login, GH_token);
    }
} else {
    alert(`Not found id="${lab4_button_html_id}"`);
}