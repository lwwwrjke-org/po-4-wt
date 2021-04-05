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
            login: 'Login',
            avatar_url: "",
            company: "Company",
            created_at: null,
            followers: 0,
            following: 0,
            stars: 0,
            location: "Location",
            name: "Name",
            repos: [
                {
                    name: 'Name 1',
                    description: 'Description 1',
                    created_at: null,
                    updated_at: null,
                    pushed_at: null,
                },
                {
                    name: 'Name 2',
                    description: 'Description 2',
                    created_at: null,
                    updated_at: null,
                    pushed_at: null,
                }
            ],
        };
    }

    render() {
        return (
            <div className="App">
                <div className={styles.App__block}>
                    {/* button */}
                    <div>
                        <input
                            type="text"
                            placeholder="Login"
                            onInput={(event) => { this.change_login(event) }}
                            className={styles.b_button__input}
                        />
                        <button
                            type="submit"
                            onClick={() => { this.start_function() }}
                            className={styles.b_button__button}
                        >
                            Fetch
                        </button>
                    </div>
                    {/* end button */}
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
                                Created {this.get_formated_date(this['state']['created_at'])}
                            </span>
                        </div>
                    </header>
                    {/* end header */}
                    {/* repos */}
                    <div>
                        {
                            (this['state']['repos']).map(
                                (obj, index) => (
                                    <div className={styles.b_repos__repo} key={index}>
                                        <div>
                                            <a href={obj['svn_url']}>
                                                {obj['name']}
                                            </a>
                                        </div>
                                        <div className={styles.b_repos__description}>
                                            {obj['description']}
                                        </div>
                                        <div className={styles.b_repos__time}>
                                            Created at {this.get_formated_date(obj['created_at'])}
                                        </div>
                                        <div className={styles.b_repos__time}>
                                            Updated At {this.get_formated_date(obj['updated_at'])}
                                        </div>
                                        <div className={styles.b_repos__time}>
                                            Pushed At {this.get_formated_date(obj['pushed_at'])}
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                    {/* end repos */}
                </div>
            </div>
        );
    };
    // end render()


    componentDidMount() {
        // React run function componentDidMount automaticl on reload page
        //this.fetch_users();
        //this.fetch_repos();
    }
    // end componentDidMount()


    change_login(event) {
        this.setState(
            {
                login: event.target.value,
            }
        );
    }


    start_function() {
        this.fetch_users();
        this.fetch_repos();
    }
    // end start_function()

    
    get_formated_date(param_date)
    {
        let obj = new Date(param_date);
        let year = obj.getFullYear();
        let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(obj);
        let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(obj);

        let hours = obj.getHours();
        let minutes = obj.getMinutes();
        let seconds = obj.getSeconds();

        return (<span>{year}.{month}.{day} {hours}:{minutes}:{seconds}</span>);
    }

    fetch_users() {
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
                    console.log(result);
                }
            );
    }
    // end fetch_users()


    fetch_repos() {
        fetch(`https://api.github.com/users/${this.state.login}/repos`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            repos: result,
                        }
                    );
                    console.log(result);
                }
            );
    }
    // end fetch_repos()

}

export default App;