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
            name: "",
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
                            name: result['name'],
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
                <div className={styles.App__block}>
                    {/* header */}
                    <header>
                        <div className={styles.App__b_profile}>
                            <div className={styles.b_profile__b_avatar}>
                                <img
                                    className={styles.b_profile__img}
                                    src={this['state']['avatar_url']}
                                    alt={`${this.state.login} avatar_url`}
                                />
                            </div>
                            <div className={styles.b_profile__b_info}>
                                <div className={styles.b_profile__name}>
                                    {this['state']['name']}
                                </div>
                                <div className={styles.b_profile__login}>
                                    {this['state']['login']}
                                </div>
                            </div>
                        </div>
                        <div className={styles.App__b_more_info}>
                            <span className={styles.b_profile__link}>
                                <FontAwesomeIcon icon={faUserFriends} />
                                <span className={styles.b_profile__value}>
                                    {this['state']['followers']}
                                </span>
                                followers
                            </span>
                            <span className={styles.b_profile__link}>
                                <span className={styles.b_profile__value}>
                                    {this['state']['following']}
                                </span>
                                following
                            </span>
                        </div>
                        <div className={styles.App__b_more_info}>
                            <span className={styles.b_profile__link}>
                                <FontAwesomeIcon icon={faBuilding} /> {this['state']['company']}
                            </span>
                        </div>
                        <div className={styles.App__b_more_info}>
                            <span className={styles.b_profile__link}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {this['state']['location']}
                            </span>
                        </div>
                    </header>
                    {/* end header */}
                </div>
            </div>
        );
    };
    // end render()
}

export default App;