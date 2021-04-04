function App() {
    function get_login(event) {
        console.log(event.target.value);
    }

    return (
        <div className="App">
            <input type="text" placeholder="GitHub login" onInput={get_login} />
        </div>
    );
}

export default App;