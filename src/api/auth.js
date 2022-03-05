import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (username, email, password, passwordConfirmation) => {
  return axios.post(apiUrl + '/sign-up/', {
    credentials: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  })
}

export const signIn = (username, password) => {
  return axios.post(apiUrl + '/sign-in/', {
    credentials: {
      username,
      password
    }
  })
}

export const signOut = user => {
  return axios.delete(apiUrl + '/sign-out/', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const changePassword = (oldPassword, newPassword, user) => {
  return axios.patch(
    apiUrl + '/change-password/',
    {
      passwords: {
        old: oldPassword,
        new: newPassword
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const indexUser = (user) => {
  return axios.get(
    `${apiUrl}/users/`,
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
