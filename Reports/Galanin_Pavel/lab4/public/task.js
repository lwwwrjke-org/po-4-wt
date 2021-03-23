class lab4 {
    constructor(GH_login = "", GH_token = "") {
        console.log("Constructor lab4 run");
        this.GH_login = GH_login;
        this.GH_token = GH_token;
        if (this.GH_token != '') {
            this.headers = {
                "Authorization": `Token ${this.GH_token}`
            }
        }
    }
    get() {
        let url = `https://api.github.com/users/${this.GH_login}`;
        console.log(`url = ${url}`);
        fetch(url, {
            "method": "GET",
            "headers": this.headers
        })
            // JSON to JS object
            .then(response => response.json())
            // Save JS object
            .then((data) => {
                if (data.message) {
                    alert(data.message);
                }

                this.data = data;
                console.log(`this.data = ${this.data} =`);
                console.log(this.data);
            })
            .then(() => {
                // b-profile
                let avatar_url_html_class = 'GH__avatar_url';
                if (document.getElementById(avatar_url_html_class)) {
                    document.getElementById(avatar_url_html_class).innerHTML
                        = `<img src="${this.data['avatar_url']}" alt="" />`;
                } else {
                    console.error(`Not found id="${avatar_url_html_class}"`);
                }

                let name_html_class = 'GH__name';
                if (document.getElementById(name_html_class)) {
                    document.getElementById(name_html_class).innerHTML
                        = this.data['name'];
                } else {
                    console.error(`Not found id="${name_html_class}"`);
                }

                let login_html_class = 'GH__login';
                if (document.getElementById(login_html_class)) {
                    document.getElementById(login_html_class).innerHTML
                        = this.data['login'];
                } else {
                    console.error(`Not found id="${login_html_class}"`);
                }
                // end b-profile
            })
            .then(() => {
                // b-stats
                let followers_html_id = 'GH__followers';
                if (document.getElementById(followers_html_id) != undefined) {
                    document.getElementById(followers_html_id).innerHTML = this.data['followers'];
                } else {
                    console.error(`Not found id="${followers_html_id}"`);
                }

                let following_html_id = 'GH__following';
                if (document.getElementById(following_html_id) != undefined) {
                    document.getElementById(following_html_id).innerHTML = this.data['following'];
                } else {
                    console.error(`Not found id="${following_html_id}"`);
                }
                // end b-stats
            })
            // Get info about followers
            .then(() => {
                fetch(this.data['followers_url'], {
                    "method": "GET",
                    "headers": this.headers
                })
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
                    })
            })
            //Get info about repositories
            .then(() => {
                let repos_url = this.data.repos_url;
                console.log(`repos_url = ${repos_url}`);
                fetch(repos_url, {
                    "method": "GET",
                    "headers": this.headers
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message) {
                            alert(data.message);
                        }

                        console.log(data);

                        let html = '';

                        for (let i = 0; i < data.length; i++) {
                            let name = `<td>` +
                                `<a href="${data[i]['html_url']}">${data[i]['name']}</a>` +
                                `</td>`;

                            let description = `<td>` +
                                `${data[i]['description']}` +
                                `</td>`;

                            html += `<tr>` + name + description + `</tr>`;
                        }

                        if (document.getElementById('lab4__tbody-repos') != undefined) {
                            document.getElementById('lab4__tbody-repos').innerHTML = html;
                        } else {
                            alert(`Not found id="lab4__tbody-repos"`);
                        }

                    })
            });
    }
}

if (document.getElementById('lab4__button') != undefined) {
    document.getElementById('lab4__button').onclick = function () {
        //get login
        let GH_login = '';
        if (document.getElementById('lab4__login-input') != undefined) {
            let login_input = document.getElementById('lab4__login-input');

            GH_login = login_input.value;

            console.log(`GH_login = $ { GH_login }`);
        } else {
            alert(`Not found id="lab4__login-input"`);
        }


        //get token
        let GH_token = '';
        if (document.getElementById('lab4__token-input') != undefined) {
            let token_input = document.getElementById('lab4__token-input');
            GH_token = token_input.value;
            console.log(`GH_token = $ { GH_token }`);
        } else {
            alert(`Not found id="lab4__token-input"`)
        }


        //create object
        let obj = new lab4(GH_login, GH_token);
        obj.get();
    }
} else {
    alert(`Not found id="lab4__button"`);
}