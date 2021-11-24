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
            const data = {
                id: res.data.user.id,
                name: res.data.user.name,
                cpf: res.data.user.cpf,
                email: res.data.user.email,
                phone: res.data.user.phone,
                birthDate: new Date(res.data.user.birthDate).toLocaleDateString('pt-br'),
                typeAccess: res.data.user.typeAccess,
                typeAccessData: res.data.user.typeAccessData,
                createAt: res.data.user.createAt,
                updateAt: res.data.user.updateAt
            }
            commit('SET_USER_DATA', data)
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}
// FIM ROTAS NÃO AUTENTICADAS

// ROTAS AUTENTICADAS PELO TOKEN REALIZAM A REQUISIÇÃO  COM A IMPORTAÇÃO DA VARIÁVEL "f"
export function getUser ({ commit }, { id }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().get(`/users/${id}/details`).then((res) => {
            const data = {
                id: res.data.user.id,
                name: res.data.user.name,
                cpf: res.data.user.cpf,
                email: res.data.user.email,
                phone: res.data.user.phone,
                birthDate: new Date(res.data.user.birthDate).toLocaleDateString('pt-br'),
                typeAccess: res.data.user.typeAccess,
                typeAccessData: res.data.user.typeAccessData,
                createAt: res.data.user.createAt,
                updateAt: res.data.user.updateAt
            }
            commit('SET_USER_DATA', data)
            resolve(res)
        }).catch((error) => {
            commit('SET_USER_DATA', {})
            reject(error.response)
        })
    })
}

// export function getUsers ({ commit }) {
//     return new Promise((resolve, reject) => {
//         f().axiosToken().get('/user/list').then((res) => {
//             commit('SET_LIST_USERS', res.data)
//             resolve(res)
//         }).catch((error) => {
//             reject(error.response)
//         })
//     })
// }

export function patchUser ({ dispatch }, { id, data }) {
    return new Promise((resolve, reject) => {
        f().axiosToken().patch(`/users/${id}`, data).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error.response)
        })
    })
}
// FIM ROTAS AUTENTICADAS