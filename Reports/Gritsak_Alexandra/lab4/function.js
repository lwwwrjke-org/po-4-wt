fetchFunc = async () => {
    var username = document.getElementById('username').value; //вводим логин гит-пользователя
    if (username === '') { //проверка или поле не пустое, и если пустое, то выводим об этом сообщение
        document.getElementById('tabl').innerHTML = '<center><div class="text">Поле не заполнено! Попробуйте ещё раз!</div></center>';
    } else { //если не пустое
        const userApi = await fetch(`https://api.github.com/users/${username}`); //в качестве аргумента fetch прописываем путь к данным (обязательнеый аргумент!)
        const reposApi = await fetch(`https://api.github.com/users/${username}/repos`) // необходимые данные - имя пользователя и его репозитории 
        .then(async (res) => {
           let res_result = res.status;
            if (res_result === 200) {
                const user_info = await userApi.json(); //создаем перменные для инфы об пользователе и его репозиториях
                const user_reposit = await res.json();  

               document.getElementById('info').innerHTML = '<div class="userInfoName">'+ user_info.name + '</div>' 
                + '<div class="userInfoLogin">' + user_info.login + '</div>' 
                + '<div style=" font-size: 14px;"><b>' + user_info.followers + '</b> followers <b>' + user_info.following + '</b> following</div>'; //получаем инфу о гит-пользователе и выводим ее в соотв. div'ы 
               document.getElementById('img').innerHTML = `<img class="mainImg" src="${user_info.avatar_url}"/>`;

               if (user_reposit.length !== 0) { //проверка или существуют репозитории у данного гит-пользователя, и если сущетсвуют то выводим по 
                    let j = 0; //счетчик, чтобы выводить по два репозитория в строке
                    let output_table = "<table class='mainTable'>";
                    output_table += `<tr>`;

                    user_reposit.forEach(function(repositoriu) {
                        if (repositoriu.description === null) { //проверка репозитория
                            repositoriu.description = ' ';
                        } 
                        if (repositoriu.language === null) { //проверка ЯП для данного репозитория, если они не равны нулю, то выводим их в div'ы 
                            repositoriu.language = ' ';
                        }
                        output_table += `<td> ${repositoriu.name}` + `<p><div class="repo"> ${repositoriu.description}</div></p> <p><div class="lang"> ${repositoriu.language}</div></p></td>`;
                        j = j + 1;
                        if (j == 2) {
                            output_table += `</tr>`;
                            j = 0;
                        }
                   });

                   output_table += "</table>";
                   document.getElementById('tabl').innerHTML = output_table;
                } else { //если у данного пользователя нет репозиториев (например пользователь "dddd")
                    document.getElementById('tabl').innerHTML = '<center><div class="text"> У данного пользователя нет репозиториев! </div></center>';
                }
            } 
            if (res_result === 404) { // если произошла ошибка
                document.getElementById('tabl').innerHTML = '<center><div class="text"> Внимание! Ошибка!</div></center>';
            }
        });
    }  
}

function main() {
    fetchFunc();
}

let button = document.querySelector('.button');
button.addEventListener('click', main);