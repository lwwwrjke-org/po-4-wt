import React from 'react';
import styles from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserFriends,
    faBuilding,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: 'Pavel-Innokentevich-Galanin',
            avatar_url: "",
            company: "",
            followers: 0,
            following: 0,
            stars: 0,
            location: "",
        };
    }

    componentDidMount() {
        // fetch users
        fetch(`https://api.github.com/users/${this.state.login}`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            avatar_url: result['avatar_url'],
                            company: result['company'],
                            followers: result['followers'],
                            following: result['following'],
                            starred_url: result['starred_url'],
                            location: result['location'],
                        }
                    );
                    console.log(result);
                }
            );
        // end fetch users
    }

    render() {
        return (
            <div className="App">
                <div className={styles.container}>
                    {/* App__header */}
                    <div className={styles.App__header}>
                        <div>
                            <img
                                className={styles.header__img}
                                src={this['state']['avatar_url']}
                                alt={`${this.state.login} avatar_url`}
                            />
                        </div>
                        <div>
                            <span className={styles.header__link}>
                                <FontAwesomeIcon icon={faUserFriends} />
                                <span className={styles.header__value}>
                                    {this['state']['followers']}
                                </span>
                                followers
                            </span>
                            <span className={styles.header__link}>
                                <span className={styles.header__value}>
                                    {this['state']['following']}
                                </span>
                                following
                            </span>
                        </div>
                        <div>
                            <span className={styles.header__link}>
                                <FontAwesomeIcon icon={faBuilding} /> {this['state']['company']}
                            </span>
                        </div>
                        <div>
                            <span className={styles.header__link}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {this['state']['location']}
                            </span>
                        </div>
                    </div>
                    {/* end App__header */}
                </div>
            </div>
        );
    };
    // end render()
}

export default App;