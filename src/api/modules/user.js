import { apiHttp } from '../axiosApi.js'
import {

  userPath,

} from '../config/apiRoute.js'

// export const createUserApi = body => apiHttp('POST', `${mobileUserPath}`, body)

// export const becomeAffiliateApi = person_id =>
//   apiHttp('PUT', `${appCardsData}/request/${person_id}`)

// export const createAppPersonApi = (userId, body) =>
//   apiHttp('POST', `${appPersonPath}/${userId}`, body)

// export const updateUserApi = (userId, body) =>
//   apiHttp('PUT', `${mobileUserPath}/${userId}`, body)

// export const changePassUserApi = (userId, password) =>
//   apiHttp('PUT', `${userPath}/password/${userId}`, { password })

export const getUsers = () =>
  apiHttp('GET', `${userPath}`)

export const loginApi = ({ email, password }) => {
  return apiHttp('GET', `${userPath}/detail`, null, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${email}:${password}`),
    },
  })
}
