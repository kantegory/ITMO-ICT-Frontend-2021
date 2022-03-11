import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";
import store from "@/store";

/**
 * getCityList - получение списка городов,
 * @constructor
 * @param {string} text - строка поиска, значение для сортировки.
 * @return {array} data - массив обьектов.
 */
export const getCityList = async (text) => {
    fetch(`${URL}api/city/?name=${text}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
        .then(checkResponse)
        .then(data => {
            store.commit('addCityList', data)
        })
        .catch(err => console.log(err))
}