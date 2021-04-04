function App() {
    function hi()
    {
        alert("Hi!");
    }

    return (
        <div className="App">
            <button onClick={hi}>Hello!</button>
        </div>
    );
}

export default App;