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
      show: 0,
      avatar_url: '',
      name: "",
      login: '',
      followers: 0,
      following: 0,
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
      <div className="main">
        <nav>
          <p className="text">GitHub pirate</p>
          <input className="input" type="text" placeholder="Search user" onInput={(event) => { this.new_user(event) }} /><br></br>
          <button className="search" type="submit" onClick={() => { this.Search() }}> Search </button>
        </nav>
        <div className={this['state']['show'] ? "main_profile" : "no"}>
          <div className="block">
            <div className="left">
              <div className="b_profile__b_avatar">
                <img className="img" src={this['state']['avatar_url']} alt="none" />
              </div>

              <div className="name">
                {this['state']['name']}
              </div>
              <div className="username">
                {this['state']['login']}
              </div>
              <FontAwesomeIcon className="icon" icon={faUserFriends} />
              <span className="followers">
                {this['state']['followers']}
              </span> followers <br></br>
              <FontAwesomeIcon className="icon" icon={faUserFriends} />
              <span className="followers">
                {this['state']['following']}
              </span> following
              <br></br>
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
              <span className="followers">{this['state']['location'] ? this['state']['location'] : "no"}</span>
              <br></br>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span className="followers">{this['state']['email'] ? this['state']['email'] : "no"}</span>
              <br></br>
              <FontAwesomeIcon className="icon" icon={faBuilding} />  
              <span className="followers">{this['state']['company'] ? this['state']['company'] : "no"}</span>
              <br></br>

              <div>
                <button className="change" onClick={(event) => this.change_view(event)}>Change view</button>
              </div>
            </div>

          
            <div className="right">
              <h1 align="center">Public repositiries</h1>
              <div className={this['state']['view_style'] ? "change" : "change_view"}>
                {
                  (this['state']['repos']).map(
                    (obj) => (
                        <div className="repositories"><div class="input_td"><p class="name_rep">{obj['name']}</p></div></div>
                    )
                  )
                }
              </div>
            </div>
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
      show: 1,
    })
    fetch(`https://api.github.com/users/${this.state.login}`)
      .then(mainData => mainData.json())
      .then(
        (data) => {
          this.setState(
            {
              avatar_url: data['avatar_url'],
              name: data['name'],
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