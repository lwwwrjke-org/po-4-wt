class lab4 {
    constructor(GH_login = "", GH_token = "") {
        console.log("Constructor lab4 run");
        this.GH_login = GH_login;
        this.GH_token = GH_token;
    }
    get() {
        let url = `https://api.github.com/users/${this.GH_login}`;
        console.log(`url = ${url}`);
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.data = data;
                console.log(`this.data = ${this.data} =`);
                console.log(this.data);
            })
            .then(() => {
                let followers = this.data.followers;
                console.log(`followers = ${followers}`);

                if (document.getElementById('lab4__number_followers') != undefined) {
                    document.getElementById('lab4__number_followers').innerHTML = `Number followers: ${followers}`;
                } else {
                    alert(`Not found id="lab4__number_followers"`);
                }

                let followers_url = this.data.followers_url;
                console.log(`followers_url = ${followers_url}`);

                fetch(followers_url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        let html = '';

                        for (let i = 0; i < data.length; i++) {
                            let img = `<td>` +
                                `<a href="${data[i]['html_url']}">` +
                                `<img width="64" src="${data[i]['avatar_url']}" alt="GitHub img ${data[i]['login']}">` +
                                `</a>` +
                                `</td>`;

                            let username = `<td>` +
                                `<a href="${data[i]['html_url']}">${data[i]['login']}</a>` +
                                `</td>`;

                            html += `<tr>` + img + username + `</tr>`;
                        }

                        document.getElementById('lab4__tbody-followers').innerHTML = html;
                    })
            })
    }
}

if (document.getElementById('lab4__button') != undefined) {
    document.getElementById('lab4__button').onclick = function() {
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