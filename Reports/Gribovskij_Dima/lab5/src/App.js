import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends,
  faMapMarkerAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showInfo: 0,
      view: 1,
      avatar_url: "",
      login: "login",
      name: "name",
      followers: 0,
      following: 0,
      bio: "",
      company: "company",
      email: "email",
      location: "location",
      repos: [
          {
              title: 'title',
              description: "",
              language: "",
          }
      ]
    }
  };

  render() {
    return (
        <div>
            <div className="search_button">
            <center>
              <input type="text" placeholder="Login" name="login"
                     onInput={(event) => this.User(event)} /><br></br>
              <button type="submit" className="btn_search" onClick={() => this.Search()}>Submit</button>
            </center>
            <hr></hr>
            </div>
            <div className="container">
              <div className="box sidebar" style={{ display: this['state']['showInfo'] ? "block" : "none" }}>
                <div>
                    <img className="avatar_img" src={this['state']['avatar_url']} alt=""/>
                </div>

                <div className="name padding-bottom-10">
                    <span>{this['state']['name']}</span>
                </div>

                <div className="login padding-bottom-10">
                    <span>{this['state']['login']}</span>
                </div>

                <div>
                    <button className="btn-follow">Follow</button>
                    <button className="btn-follow point" >...</button>
                </div>

                <div className="bio padding-bottom-10">
                    <span>{this['state']['bio']}</span>
                </div>

                <div className="followers padding-bottom-10">
                    <FontAwesomeIcon icon={faUserFriends} />&nbsp;
                    <a className="blue-a grey" href="https://github.com/${this.state.login}?tab=followers">
                        <span>&nbsp;{this['state']['followers']}&nbsp;</span>
                        followers&nbsp;
                    </a>
                    &middot;
                    <a className="blue-a grey" href="https://github.com/${this.state.login}?tab=following">
                        <span>&nbsp;{this['state']['following']}&nbsp;</span>
                        following
                    </a>
                </div>
                <div className="location padding-bottom-10">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                    <span>{this['state']['location']}</span>
                </div>
                <div className="email padding-bottom-10">
                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                    <span>{this['state']['email']}</span>
                </div>
                  <button className="btn_change_view" onClick={(event) => this.ChangeView(event)}>
                      Change view
                  </button>
              </div>
                <div className="box" style={{ display: this['state']['showInfo'] ? "block" : "none" }}>

                <div className={this['state']['view'] ? "wrapper" : "wrapper2"}>
                    {
                        (this['state']['repos']).map (
                        (object) => (
                                <div className="box2">
                                    <div>
                                        <a className="underline-a" href={object['html_url']}>
                                            {object['name']}
                                        </a>
                                    </div>
                                    <div>
                                        {object['description']}
                                    </div>
                                    <div className="repo_lang">
                                        {object['language']}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
              </div>
            </div>
        </div>
    )
  };

  ChangeView(event) {
      if (this['state']['view'] === 0) {
          this.setState(
              {
                view: 1,
              }
          );
      } else {
          this.setState(
              {
                view: 0,
              }
          );
      }
  }

  User(event) {
      this.setState({
          login: event.target.value,
      })
  }

  Search() {
      this.setState({
          showInfo: 1,
      })
      fetch(`https://api.github.com/users/${this.state.login}`,)
        .then(
            main => main.json()
        ).then(
        data => {
            this.setState({
                avatar_url: data['avatar_url'],
                name: data['name'],
                login: data['login'],
                bio: data['bio'],
                location: data['location'],
                followers: data['followers'],
                following: data['following'],
                company: data['company'],
                email: data['email']
              }
          );
        }
    );
    fetch(`https://api.github.com/users/${this.state.login}/repos`)
        .then(rep => rep.json()
    ).then(
        data => {
            this.setState (
                {
                    repos: data
                }
            );
        }
    )
  }
};

export default App;
