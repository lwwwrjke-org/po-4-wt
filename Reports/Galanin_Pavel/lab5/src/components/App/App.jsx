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
            company: "Company",
            created_at: null,
            created_at__formated: '0000.00.00 00:00:00',
            followers: 0,
            following: 0,
            stars: 0,
            location: "Location",
            name: "Name",
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
                            created_at: result['created_at'],
                            followers: result['followers'],
                            following: result['following'],
                            starred_url: result['starred_url'],
                            location: result['location'],
                            name: result['name'],
                        }
                    );

                    // get formated created_at
                    let obj = new Date(this['state']['created_at']);

                    let year = obj.getFullYear();
                    let month = obj.getMonth() + 1;
                    let date = obj.getDate();

                    let hours = obj.getHours();
                    let minutes = obj.getMinutes();
                    let seconds = obj.getSeconds();

                    this.setState(
                        {
                            created_at__formated: `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`,
                        }
                    );
                    // end get formated created_at

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
                                    alt=""
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
                        <div className={styles.App__b_more_info}>
                            <span className={styles.b_profile__link}>
                                Created {this['state']['created_at__formated']}
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