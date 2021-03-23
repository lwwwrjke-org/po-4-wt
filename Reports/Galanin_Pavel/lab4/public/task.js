function lab4(GH_login = "", GH_token = "") {
    let url = `https://api.github.com/users/${GH_login}`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            if (data.message) {
                alert(data.message);
            }
            return data;
        })
        .then((data) => {
            // b-profile
            let avatar_url_html_id = 'GH__avatar_url';
            if (document.getElementById(avatar_url_html_id)) {
                document.getElementById(avatar_url_html_id).innerHTML
                    = `<img src="${data['avatar_url']}" alt="" />`;
            } else {
                console.error(`Not found id="${avatar_url_html_id}"`);
            }

            let name_html_id = 'GH__name';
            if (document.getElementById(name_html_id)) {
                document.getElementById(name_html_id).innerHTML
                    = data['name'];
            } else {
                console.error(`Not found id="${name_html_id}"`);
            }

            let login_html_id = 'GH__login';
            if (document.getElementById(login_html_id)) {
                document.getElementById(login_html_id).innerHTML
                    = data['login'];
            } else {
                console.error(`Not found id="${login_html_id}"`);
            }
            // end b-profile
            return data;
        })
        .then((data) => {
            // b-stats
            let followers_html_id = 'GH__followers';
            if (document.getElementById(followers_html_id) != undefined) {
                document.getElementById(followers_html_id).innerHTML = data['followers'];
            } else {
                console.error(`Not found id="${followers_html_id}"`);
            }

            let following_html_id = 'GH__following';
            if (document.getElementById(following_html_id) != undefined) {
                document.getElementById(following_html_id).innerHTML = data['following'];
            } else {
                console.error(`Not found id="${following_html_id}"`);
            }
            // end b-stats
            return data;
        })
        // Get info about followers
        .then((data) => {
            fetch(data['followers_url'])
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        alert(data.message);
                    }

                    let html = '';
                    for (let i = 0; i < data.length; i++) {
                        html +=
                            `<div class="b-followers__b-follower">`
                            + `<div class="b-followers__img">`
                            + `<img src="${data[i]['avatar_url']}" alt="${data[i]['login']}" />`
                            + `</div>`
                            + `<div class="b-followers__info">`
                            + `<a href="${data[i]['html_url']}">${data[i]['login']}</a>`
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

                    return data;
                })
            return data;
        })
        //Get info about repositories
        .then((data) => {
            let repos_url = data.repos_url;
            fetch(repos_url)
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        alert(data.message);
                    }

                    let html = '';
                    for (let i = 0; i < data.length; i++) {
                        html +=
                            `<div class="b-repos__repository">`
                            + `<div class="b-repos__name">`
                            + `<a href="${data[i]['html_url']}">${data[i]['name']}</a>`
                            + `</div>`
                            + `<div class="b-repos__description">`
                            + `${data[i]['description'] == null ? '' : data[i]['description']}`
                            + `</div>`
                            + `</div>`;
                    }

                    let repos_html_id = 'GH__repos_url';
                    if (document.getElementById(repos_html_id) != undefined) {
                        document.getElementById(repos_html_id).innerHTML = html;
                    } else {
                        alert(`Not found id="${repos_html_id}"`);
                    }

                    return data;
                })
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