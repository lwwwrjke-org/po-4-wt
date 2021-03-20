class lab4 {
    constructor() {
        console.log("Constructor lab4 run");
    }
    alert_fetch() {
        fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
            .then(response => response.json())
            .then(commits => alert(commits[0].author.login));
    }
}

let obj = new lab4();
obj.alert_fetch();