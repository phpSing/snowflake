/**
 * # Login.js
 *  timwu @ kidswant 9/8/2016, 1:49:04 PM
 *  人客合一登陆界面
 *  The container to display the Login form
 *
 */
'use strict'
/**
 * ## Imports
 *
 * Redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions we need
 */
import * as authActions from '../reducers/_auth/authActions'

/**
 *   LoginRender
 */
import LoginRender from '../_components/LoginRender'

/**
 * The necessary React components
 */
import React from 'react'

const {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
} = require('../lib/constants').default

/**
 * ## Redux boilerplate
 */

function mapStateToProps (state) {
  return {
    auth: state.auth,
    global: state.global
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

function buttonPressHandler (login, username, password) {
  login(username, password)
}

let Login = React.createClass({

  render () {
    let onButtonPress = buttonPressHandler.bind(null,
                                                this.props.actions.login,
                                                this.props.auth.form.fields.username,
                                                this.props.auth.form.fields.password
                                               )

    return (
      <LoginRender
        formType={LOGIN}
        loginButtonText={'登录'}
        auth={this.props.auth}
        actions={this.props.actions}
        global={this.props.global}
      />
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
