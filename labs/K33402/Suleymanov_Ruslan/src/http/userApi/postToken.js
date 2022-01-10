import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";
import store from "@/store";
import router from "@/router";

/**
 * postToken - получение погоды по геоданынм,
 * @constructor
 * @param {string} username - ник пользователя.
 * @param {string} password - пароль пользоветля.
 * @return {object} data - токен JWT.
 */

export const postToken = async (username, password) => {
    fetch(`${URL}token/`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
        .then(checkResponse)
        .then(data => {
            store.commit('addToken', data)
            localStorage.setItem('token', JSON.stringify(data))
            store.dispatch('addUser');
            router.push('profile')
        })
        .catch(err => console.log(err))
}