/**
 * # authActions.js
 *
 * All the request actions have 3 variations, the request, a success
 * and a failure. They all follow the pattern that the request will
 * set the ```isFetching``` to true and the whether it's successful or
 * fails, setting it back to false.
 *
 */
'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
const {


  LOGIN,
  LOGOUT,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  ON_AUTH_FORM_FIELD_CHANGE,


} = require('../../lib/constants').default

/**
 * Project requirements
 */

import {Actions} from 'react-native-router-flux'

const AppAuthToken = require('../../lib/AppAuthToken').default

const _ = require('underscore')

/**
 * ## State actions
 * controls which form is displayed to the user
 * as in login, register, logout or reset password
 */


export function loginState () {
  return {
    type: LOGIN
  }
}

export function logoutState () {
  return {
    type: LOGOUT
  }
}

/**
 * ## onAuthFormFieldChange
 * Set the payload so the reducer can work on it
 */
export function onAuthFormFieldChange (field, value) {
  return {
    type: ON_AUTH_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
}

/**
 * ## Login actions
 */
export function loginRequest () {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess (json) {
  return {
    type: LOGIN_SUCCESS,
    payload: json
  }
}

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
/**
 * ## Login
 * @param {string} username - user's name
 * @param {string} password - user's password
 *
 * After calling Backend, if response is good, save the json
 * which is the currentUser which contains the sessionToken
 *
 * If successful, set the state to logout
 * otherwise, dispatch a failure
 */

export function login (username, password) {
  return dispatch => {
    dispatch(loginRequest())
    Actions.Login()
    dispatch(logoutState())
  }
}
