class lab4 {
    constructor(GH_login = "") {
        console.log("Constructor lab4 run");
        this.GH_login = GH_login;
    }
    get() {
        let url = `https://api.github.com/users/${this.GH_login}`;
        console.log(url);
        fetch(url)
            .then(response => { console.log(response) });
    }
}

let obj = new lab4('Pavel-Innokentevich-Galanin');
obj.get();