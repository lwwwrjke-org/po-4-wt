import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends,
  faMapMarkerAlt,
  faEnvelope,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: 0,
      avatar_url: '',
      name: "",
      login: '',
      followers: 0,
      following: 0,
      bio: "",
      location: "",
      email: "",
      company: "",
      view_style: 1,
      repos: [{
          name: '',
        }]
    };
  }

  render() {
    return (
      <div>
        <p className="text">Enter username:</p>
        <input className="input" type="text" placeholder="Search user" onInput={(event) => { this.new_user(event) }} /><br></br>
        <button className="search" type="submit" onClick={() => { this.Search() }}> Search </button>

        <div className={this['state']['showInfo'] ? "main_profile" : "none"}>
          <div className="b_profile__b_avatar">
            <img className="profile_img" src={this['state']['avatar_url']} alt="none" />
          </div>

          <div className="profile_name">
            {this['state']['name']}
          </div>
          <div className="profile_username">
            {this['state']['login']}
          </div>
          <div className="bio">
            {this['state']['bio']}
          </div>
          <FontAwesomeIcon className="Icon" icon={faUserFriends} />
          <span className="profile_followers">
            {this['state']['followers']}
          </span> followers
          &middot;
          <span className="profile_followers">
             {this['state']['following']}
          </span> following
          <br></br>
          <FontAwesomeIcon className="Icon" icon={faMapMarkerAlt} />
          <span className="profile_followers">{this['state']['location'] ? this['state']['location'] : "none"}</span>
          <br></br>
          <FontAwesomeIcon className="Icon" icon={faEnvelope} />
          <span className="profile_followers">{this['state']['email'] ? this['state']['email'] : "none"}</span>
          <br></br>
          <FontAwesomeIcon className="Icon" icon={faBuilding} />  
          <span className="profile_followers">{this['state']['company'] ? this['state']['company'] : "none"}</span>
          <br></br>

          <div>
            <button className="change" onClick={(event) => this.change_view(event)}>Change view</button>
          </div>

          <div className={this['state']['view_style'] ? "change_view2" : "change_view1"}>
            {
              (this['state']['repos']).map(
                (obj) => (
                  <div>
                    <div className="repos">{obj['name']}</div>
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
    this.setState({
      showInfo: 1,
    })
    fetch(`https://api.github.com/users/${this.state.login}`)
      .then(mainData => mainData.json())
      .then(
        (data) => {
          this.setState(
            {
              avatar_url: data['avatar_url'],
              name: data['name'],
              bio: data['bio'],
              followers: data['followers'],
              following: data['following'],
              location: data['location'],
              email: data['email'],
              company: data['company']
            }
          );
        }
      );
    fetch(`https://api.github.com/users/${this.state.login}/repos`)
      .then(repos => repos.json())
      .then(
        (data) => {
          this.setState(
            {
              repos: data,
            }
          );
        }
      );
  }
}
export default App;