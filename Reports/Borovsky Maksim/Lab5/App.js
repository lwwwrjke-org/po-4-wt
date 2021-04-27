import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faMapMarkerAlt,
  faEnvelope,
  faLowVision
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

class App extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            show: 0,
            view: 1,
            avatar_url: "",
            login: "login",
            name: "name",
            followers: 0,
            following: 0,
            bio: "",
            location: "location",
            repos: 
            [{
                title: 'title',
                description: "",
                language: "",
            }]
        }
    };

  render() 
  {
    return (
        <div>
            <div className="searching">
            <center>
                <input className="input-field" type="text" placeholder="Login" name="login" 
                      onInput={(event) => this.User(event)} />
                <button type="submit" className="search-button" onClick={() => this.Search()}>Search</button>
            </center>
            
            </div>
            <div className="container">

                <div className="box sidebar" style={{ display: this['state']['show'] ? "block" : "none" }}>

                    <div>
                        <img className="avatar_img" src={this['state']['avatar_url']}/>
                    </div>

                    <div className="name">
                        <span>{this['state']['name']}</span>
                    </div>

                    <div className="login">
                        <span>{this['state']['login']}</span>
                    </div>

                    <div>
                        <button className="follow-button">Follow</button>
                        <button className="other-button" title="other"><center>...</center></button>
                        <button className="change-view-button" title="Change view" onClick={(event) => this.ChangeView(event)}>
                            <FontAwesomeIcon icon={faLowVision} />
                         </button>
                    </div>

                    <div className="bio">
                        <span>{this['state']['bio']}</span>
                    </div>

                    <div className="followers">
                        <a className="flw-blue flw-black" href="https://github.com/${this.state.login}?tab=followers">
                            <FontAwesomeIcon icon={faUsers} />&nbsp;
                            <span>&nbsp;{this['state']['followers']}&nbsp;</span>
                            followers&nbsp;
                        </a>
                        &middot;
                        <a className="flw-rgb flw-black" href="https://github.com/${this.state.login}?tab=following">
                            <span>&nbsp;{this['state']['following']}&nbsp;</span>
                            following&nbsp;
                        </a>

                    </div>

                    <div className="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                        <span>{this['state']['location']}</span>
                    </div>

                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                        <a className="email email-rgba" href="https://github.com/login">
                            Sign in to view email
                        </a>
                    </div>
                </div>
                <div className="box" style={{ display: this['state']['show'] ? "block" : "none" }}>

                    <div className={this['state']['view'] ? "tiles" : "line_by_line"}>
                        {
                            (this['state']['repos']).map (
                            (object) => (
                                    <div className="in_box">
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

  User(event) 
  {
      this.setState({login: event.target.value,})
  }

  Search() 
  {
      this.setState({show: 1,})
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
                    });
              }
           );
      fetch(`https://api.github.com/users/${this.state.login}/repos`)
          .then(rep => rep.json()
      ).then(
          data => {this.setState ({repos: data});}
      )
  }

  ChangeView(event) 
  {
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
};

export default App;