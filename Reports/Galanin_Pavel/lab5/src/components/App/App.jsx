import React from 'react';
import styles from './App.module.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar_url: ""
        };
    }

    componentDidMount() {
        let login = 'Pavel-Innokentevich-Galanin';
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({ avatar_url: result['avatar_url'] });
                    console.log(result);
                }
            );
        console.log(this)
    }

    render() {
        return (
            <div className="App">
                <div className={styles.container}>


                    {/* App__header */}
                    <div className={styles.App__header}>
                        <img
                            className={styles.header__img}
                            src={ this['state']['avatar_url'] }
                            alt=""
                        />
                    </div>
                    {/* end App__header */}


                </div>
            </div>
        );
    };
    // end render()
}

export default App;