import React from 'react';
import Logo from "./Logo.js"
import './Style.css';
import './App.css';

import { DivStyle } from "./logo.style";
import { LabelStyle } from "./logo.style";
import { InputStyle } from "./logo.style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
      login: '',
      bio: "",
      avatar_url: '',
      followers: 0,
      following: 0,
      location: "",
      public_repos: 0,
      name: "",
      email: "",
      repos: [{name: '',}]
    };
  }

  render() {
    return (
      <div className="App">
      <Logo />
        <div>
          <DivStyle>
            <LabelStyle htmlFor="user" className="search">Search User</LabelStyle>
            <InputStyle id="user" type="search" placeholder="Search user" name="user" onInput={(event) => { this.new_user(event) }}/>
          </DivStyle>
          <button className="button btn" type="submit" onClick={() => { this.Search() }}> Search </button>
        </div>
          
        <div className="avatar">
          <img className="img" src={this.state.avatar_url} alt="Avatar" />
        </div>

          <div className="name">
            <i class="fas fa-user">Name:
              {this.state.name}
            </i>
          </div>

          <div className="name">
          <i class="fab fa-github">Login:
            {this.state.login}
          </i>
          </div> 

          <div className="info">
            <i class="fas fa-book-reader">Bio:
              {this.state.bio}
            </i>
          </div>

          <div className="follow">
            <i class="fas fa-user-friends">Followers:
              {this.state.followers}
            </i>
          </div> 

          <div className="follow">
            <i class="fas fa-user-plus">Following:
              {this.state.following}
            </i>
          </div>
          
          <div className="info">
            <i class="fas fa-map-marker-alt">Location: {this.state.location} </i>
          </div>

          <div className="info">
            <i class="fas fa-flag">Public repos: {this.state.public_repos} </i>
          </div>
          <div className="info">
            <i class="fas fa-envelope-open">Email: {this.state.email} </i>
          </div>
          <div className="info">
            <i class="fas fa-book">Repositoris:</i>
            <div className={this.state.view ? '' : "change_view" }>
              {
                (this.state.repos).map(
                  (obj) => (
                    <div>
                      <div className="repos">{obj.name}</div>
                    </div>
                  )
                )
              }
          </div>
          <div >
            <button className="button btn"
              onClick={(event) => this.change_view(event)}>Change view</button>
          </div>
          </div>
      </div>
    );
  };

  change_view(event) 
  {
    if (this.state.view === 1) 
    {
      this.setState({ view: 0, } );
    }
    else 
    {
      this.setState({ view: 1, });
    }
  }

  new_user(event) 
  {
    this.setState({ login: event.target.value, });
  }

  Search() 
  {
    fetch(`https://api.github.com/users/${this.state.login}`)
      .then(userData => userData.json())
      .then(
        (res) => 
        {
          this.setState(
            {
              avatar_url: res.avatar_url,
              location: res.location,
              bio: res.bio,
              followers: res.followers,
              following: res.following,
              email: res.email,
              public_repos: res.public_repos,
              name: res.name,
            }
          );
          console.log(res);
        }
      );

    fetch(`https://api.github.com/users/${this.state.login}/repos`)
      .then(repos => repos.json())
      .then(
      (res) => 
        {
          this.setState({ repos: res, });
        }
      );
  }
}
export default App;
