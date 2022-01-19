import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";
import {postToken} from "@/http/userApi/postToken";



/**
 * postRegUser - получение погоды по геоданынм,
 * @constructor
 * @param {string} username - ник пользователя.
 * @param {string} password - пароль пользоветля.
 * @param {string} re_password - пароль повтор пользоветля.
 * @return {object} data - обьект, с данными юзера.
 */
export const postRegUser= async (username, password,re_password) => {
    fetch(`${URL}auth/users/`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            "username": username,
            "password": password,
            "re_password": re_password
        })
    })
        .then(checkResponse)
        .then(data => {
            console.log('Hello, ', data.username)
            postToken(username, password)
        })
        .catch(err => console.log(err))
}