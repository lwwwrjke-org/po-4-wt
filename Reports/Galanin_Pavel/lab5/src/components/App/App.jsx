function App() {
    function get_login(event) {
        let login = event.target.value;
        console.log(login);
        get_fetch(login);
    }

    function get_fetch(login = '') {
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div className="App">
            <input type="text" placeholder="GitHub login" onInput={get_login} value="Pavel-Innokentevich-Galanin" />
        </div>
    );
}

export default App;