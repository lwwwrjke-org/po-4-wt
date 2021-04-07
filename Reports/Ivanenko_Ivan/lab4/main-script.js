import GitHubAccountDataManager from './github-account-data-manager.js';

const searchGhAccountBtn = document.getElementById('search-gh-account-btn');
searchGhAccountBtn.addEventListener('click', displayGithubAccountData);

const divRepos = document.getElementById('repos');


async function displayGithubAccountData() {
  clear();
  const loginInput = document.getElementById('login-input').value;
  let  ghAccountDataManager = await GitHubAccountDataManager.build(loginInput);

  const userAvatar = await ghAccountDataManager.getUserAvatar();
  userAvatar.classList.add('rounded-circle', 'img-fluid');
  const divAvatar = document.getElementById('avatar');
  divAvatar.appendChild(userAvatar);

  const userName = ghAccountDataManager.getUserName();
  if(userName != null){
    const hName = document.getElementById('name');
    hName.appendChild(document.createTextNode(userName));
  }

  const userLogin = ghAccountDataManager.getUserLogin();
  const hLogin = document.getElementById('login');
  hLogin.appendChild(document.createTextNode(userLogin));

  const followBtn = document.createElement('button');
  followBtn.classList.add('btn', 'btn-outline-secondary', 'btn-block');
  followBtn.innerHTML = 'Follow';
  const divFollowBtn = document.getElementById('follow-btn');
  divFollowBtn.appendChild(followBtn);

  const infoBtn = document.createElement('button');
  infoBtn.classList.add('btn', 'btn-outline-secondary', 'btn-block');
  infoBtn.innerHTML = ' ... ';
  const divInfoBtn = document.getElementById('info-btn');
  divInfoBtn.appendChild(infoBtn);

  const userBio = ghAccountDataManager.getUserBio();
  if(userBio != null) {
    const divBio = document.getElementById('bio');
    divBio.appendChild(document.createTextNode(userBio));
  }

  const followers = document.getElementById('followers');
  followers.appendChild(document.createTextNode('followers'));

  const userAmountOfFollowers = ghAccountDataManager.getUserAmountOfFollowers();
  const htmlFollowersAmount = document.getElementById('followers-amount');
  htmlFollowersAmount.appendChild(document.createTextNode(userAmountOfFollowers));

  const followings = document.getElementById('followings');
  followings.appendChild(document.createTextNode('following'));

  const userAmountOfFollowings = ghAccountDataManager.getUserAmountOfFollowing();
  const htmlFollowingsAmount = document.getElementById('followings-amount');
  htmlFollowingsAmount.appendChild(document.createTextNode(userAmountOfFollowings));

  const userLocation = ghAccountDataManager.getUserLocation();
  if(userLocation != null) {
    const spanLocation = document.getElementById('location');
    spanLocation.appendChild(document.createTextNode(userLocation));
  }

  const userEmail = ghAccountDataManager.getUserEmail();
  if(userEmail != null) {
    const spanEmail = document.getElementById('email');
    spanEmail.appendChild(document.createTextNode(userEmail));
  }

  const reposSectionTitle = document.getElementById('repos-title');
  reposSectionTitle.appendChild(document.createTextNode('Public repositories'));

  const reposList1 = document.getElementById('repos-list-1');
  const reposList2 = document.getElementById('repos-list-2');
  const userRepos = await ghAccountDataManager.getUserRepos();
  userRepos.forEach((repo, index) => {
    const reposListItem = document.createElement('div');
    reposListItem.classList.add('repo-list-item', 'border', 'border-secondary', 'rounded', 'p-4', 'mt-3');
    const repoAnchor = document.createElement('a');
    repoAnchor.href = repo.html_url;
    repoAnchor.textContent = repo.name;
    reposListItem.appendChild(repoAnchor);
    if(repo.description != null) {
      let userRepoDescription = repo.description;
      if(userRepoDescription.length > 30) {
        userRepoDescription = userRepoDescription.substring(0, 30);
        userRepoDescription += '...';
      }
      const repoDescription = document.createElement('p');
      repoDescription.classList.add('text-secondary');
      repoDescription.appendChild(document.createTextNode(userRepoDescription));
      reposListItem.appendChild(repoDescription);
    }
    if(repo.language != null) {
      const repoLanguage = document.createElement('p');
      repoLanguage.classList.add('text-secondary');
      repoLanguage.appendChild(document.createTextNode(repo.language));
      reposListItem.appendChild(repoLanguage);
    }
    index % 2 === 0 ? reposList1.appendChild(reposListItem) : reposList2.appendChild(reposListItem);
  });


}

function clear() {
  document.getElementById('avatar').innerHTML = "";
  document.getElementById('name').innerHTML = "";
  document.getElementById('login').innerHTML = "";
  document.getElementById('follow-btn').innerHTML = "";
  document.getElementById('info-btn').innerHTML = "";
  document.getElementById('bio').innerHTML = "";
  document.getElementById('followers').innerHTML = "";
  document.getElementById('followers-amount').innerHTML = "";
  document.getElementById('followings').innerHTML = "";
  document.getElementById('followings-amount').innerHTML = "";
  document.getElementById('location').innerHTML = "";
  document.getElementById('email').innerHTML = "";
  document.getElementById('repos-title').innerHTML = "";
  document.getElementById('repos-list-1').innerHTML = "";
  document.getElementById('repos-list-2').innerHTML = "";
  document.getElementById('repos-list-2').innerHTML = "";
}
