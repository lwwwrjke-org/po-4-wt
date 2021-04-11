import React from 'react';
import style from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends,
  faMapMarkerAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view_style: 1,
      login: '',
      avatar_url: '',
      followers: 0,
      location: "Somewhere",
      name: "",
      email: "empty",
      repos: [{name: '',}]
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" placeholder="Search user" onInput={(event) => { this.new_user(event) }} />
          <button type="submit" onClick={() => { this.Search() }}> Search </button>
        </div>
        <div className={style.main__profile_key}>
          <div className={style.b_profile__b_avatar}>
            <img className={style.main__profile_img} src={this['state']['avatar_url']} alt="" />
          </div>
          <div className={style.main__profile_name}>
            {this['state']['name']}
          </div>
          <div className={style.main__profile_username}>
            {this['state']['login']}
          </div>
          <FontAwesomeIcon icon={faUserFriends} />
          <span className={style.main__profile_followers}>
            {this['state']['followers']}
          </span> followers
            <p className={style.main__profile_followers}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {this['state']['location']}
          </p>
          <p className={style.main__profile_followers}>
            <FontAwesomeIcon icon={faEnvelope} /> {this['state']['email']}
          </p>
          <div >
            <button
              onClick={(event) => this.change_view(event)}>Change view</button>
          </div>

          <div className={this['state']['view_style'] ? '' : style.change_view }>
            {
              (this['state']['repos']).map(
                (obj) => (
                  <div>
                    <div className={style.repos}>{obj['name']}</div>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    );
  };

  
  change_view(event) {
    if (this['state']['view_style'] === 1) {
      this.setState(
        {
          view_style: 0,
        }
      );
    }
    else {
      this.setState(
        {
          view_style: 1,
        }
      );
    }
  }

  new_user(event) {
    this.setState(
      {
        login: event.target.value,
      }
    );
  }

  Search() {
    fetch(`https://api.github.com/users/${this.state.login}`)
      .then(mainData => mainData.json())
      .then(
        (res) => {
          this.setState(
            {
              avatar_url: res['avatar_url'],
              company: res['company'],
              followers: res['followers'],
              following: res['following'],
              name: res['name'],
            }
          );
          console.log(res);
        }
      );
    fetch(`https://api.github.com/users/${this.state.login}/repos`)
      .then(repos => repos.json())
      .then(
        (res) => {
          this.setState(
            {
              repos: res,
            }
          );
        }
      );
  }
}
export default App;