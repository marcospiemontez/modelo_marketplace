import { api } from 'src/boot/axios'
import f from 'src/functions/index.js'

// ROTAS NÃO AUTENTICADAS PELO TOKEN REALIZAM A REQUISIÇÃO  COM A IMPORTAÇÃO DA VARIÁVEL "API"
export function createUser ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
        api.post('/authentication/registration', data).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

export function loginUser ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
        api.post('/authentication/loginUser', data).then((res) => {
            window.localStorage.setItem('marketplace_token', res.data.token)    // salvando no local storage
            commit('SET_TOKEN', res.data.token)
            commit('SET_USER_DATA', res.data.user)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}
// FIM ROTAS AUTENTICADAS

// ROTAS AUTENTICADAS PELO TOKEN REALIZAM A REQUISIÇÃO  COM A IMPORTAÇÃO DA VARIÁVEL "f"
export function getUSer ({ commit }, { id }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get(`/users/${id}`).then((res) => {
            commit('SET_USER_DATA', res.data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}

export function getUSers ({ commit }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get('/user/list').then((res) => {
            commit('SET_LIST_USERS', res.data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}
// FIM ROTAS NÃO AUTENTICADAS