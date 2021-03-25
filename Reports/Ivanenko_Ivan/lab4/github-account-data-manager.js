export default class GitHubAccountDataManager {
  constructor(userAccountData) {
    if(typeof userAccountData === 'undefined') {
      throw new Error('Cannot be called directly');
    }
    this.userAccountData = userAccountData;
  }

  static async build(login) {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const userAccountData = await response.json();
    return new GitHubAccountDataManager(userAccountData);
  }

  getUserAccountData = () => this.userAccountData;

  getUserLogin = () => this.userAccountData.login;

  getUserName = () => this.userAccountData.name;

  getUserAmountOfStars = () => this.userAccountData.stars;

  getUserAmountOfFollowers = () => this.userAccountData.followers;

  getUserFollowers = async() => {
    const userFollowersUrl = await this.getUserFollowersUrl();
    const userFollowersResponse = await fetch(userFollowersUrl);
    const userFollowers = await userFollowersResponse.json();
    return userFollowers;
  }

  getUserFollowersUrl = () => this.userAccountData.followers_url;

  getUserAmountOfFollowing = () => this.userAccountData.following;

  getUserFollowing = async() => {
    const userFollowingResponse = await fetch(`https://api.github.com/users/${this.login}/following`);
    const userFollowing = await userFollowingResponse.json();
    return userFollowing;
  }

  getUserBio = () => this.userAccountData.bio;

  getUserBlog = () => this.userAccountData.blog;

  getUserAvatar = async() => {
    const userAvatarUrl = await this.getUserAvatarUrl();
    const userAvatar = document.createElement("img");
    userAvatar.src = userAvatarUrl;
    return userAvatar;
  }

  getUserAvatarUrl = () => this.userAccountData.avatar_url;

  getUserEmail = () => this.userAccountData.email;

  getUserLocation = () => this.userAccountData.location;

  getUserRepos = async() => {
    const userReposUrl = await this.getUserReposUrl();
    const userReposResponse = await fetch(userReposUrl);
    const userRepos = await userReposResponse.json();
    return userRepos;
  }

  getUserReposUrl = () => this.userAccountData.repos_url;
}
