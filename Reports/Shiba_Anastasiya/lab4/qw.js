fetchFunc = async () => {
    var username = document.getElementById('username').value;
    if (username === '') {
        document.getElementById('tabl').innerHTML = '<center><div class="text">Поле пустое. Пожалуйста, заполните форму.</div></center>';
    } else {
        const userApi = await fetch(`https://api.github.com/users/${username}`);
        const reposApi = await fetch(`https://api.github.com/users/${username}/repos`)   
        .then(async (res) => {
           let resResult = res.status;
            if (resResult === 200) {
                const userInfo = await userApi.json();
                const userReposit = await res.json();

               document.getElementById('info').innerHTML = '<div class="userInfoName">'+ userInfo.name + '</div>' 
                + '<div class="userInfoLogin">' + userInfo.login + '</div>' 
                + '<div style=" font-size: 14px;"><b>' + userInfo.followers + '</b> followers <b>' + userInfo.following + '</b> following</div>';
               document.getElementById('img').innerHTML = `<img class="mainImg" src="${userInfo.avatar_url}"/>`;

               if (userReposit.length !== 0) {
                    let j = 0; //счетчик, чтобы выводить по два репозитория в строке
                    let outputTable = "<table class='mainTable'>";
                    outputTable += `<tr>`;

                    userReposit.forEach(function(repositoriu) {
                        if (repositoriu.description === null) { 
                            repositoriu.description = ' ';
                        } 
                        if (repositoriu.language === null) {
                            repositoriu.language = ' ';
                        }
                        outputTable += `<td> ${repositoriu.name}` + `<p><div class="repo"> ${repositoriu.description}</div></p> <p><div class="lang"> ${repositoriu.language}</div></p></td>`;
                        j = j + 1;
                        if (j == 2) {
                            outputTable += `</tr>`;
                            j = 0;
                        }
                   });

                   outputTable += "</table>";
                   document.getElementById('tabl').innerHTML = outputTable;
                } else { //чтобы проверить, можно ввести 'csiArtemLavruschik' или некого 'aaa' :)
                    document.getElementById('tabl').innerHTML = '<center><div class="text"> У пользователя нет репозиториев :( </div></center>';
                }
            } 
            if (resResult === 404) {
                document.getElementById('tabl').innerHTML = '<center><div class="text"> Что-то пошло не так... </div></center>';
            }
        });
    }  
}

function main() {
    fetchFunc();
}

let button = document.querySelector('.button');
button.addEventListener('click', main);