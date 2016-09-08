/**
 * # Login.js
 *
 * This class is a little complicated as it handles multiple states.
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
import * as globalActions from '../reducers/global/globalActions'

/**
 * Router actions
 */
import { Actions } from 'react-native-router-flux'

/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../_components/Header'
/**
 * The ErrorAlert displays an alert for both ios & android
 */
import ErrorAlert from '../_components/ErrorAlert'
/**
 * The FormButton will change it's text between the 4 states as necessary
 */
import FormButton from '../_components/FormButton'
/**
 *  The LoginForm does the heavy lifting of displaying the fields for
 * textinput and displays the error messages
 */
import LoginForm from '../_components/LoginForm'
/**
 * The necessary React components
 */
import React, {Component} from 'react'
import
{
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  View
}
from 'react-native'

import Dimensions from 'Dimensions'
var {height, width} = Dimensions.get('window') // Screen dimensions in current orientation

/**
 * The states were interested in
 */
const {
  LOGIN,
  FORGOT_PASSWORD
} = require('../lib/constants').default

/**
 * ## Redux boilerplate
 */

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...globalActions }, dispatch)
  }
}

class LoginRender extends Component {
  constructor (props) {
    super(props)
    this.errorAlert = new ErrorAlert()
    this.state = {
      value: {
        username: '19111439',//this.props.auth.form.fields.username,
        password: '198730wu'// this.props.auth.form.fields.password,
      }
    }
  }
  /**
   * ### onChange
   *
   * As the user enters keys, this is called for each key stroke.
   * Rather then publish the rules for each of the fields, I find it
   * better to display the rules required as long as the field doesn't
   * meet the requirements.
   * *Note* that the fields are validated by the authReducer
   */
  onChange (value) {

  }
  /**
   * ### render
   * Setup some default presentations and render
   */
  render () {
    /**
     * The LoginForm is now defined with the required fields.  Just
     * surround it with the Header and the navigation messages
     * Note how the button too is disabled if we're fetching. The
     * header props are mostly for support of Hot reloading.
     * See the docs for Header for more info.
     */

    return (

      <View style={styles.container}>

        <Header />

        <LoginForm />

        <View style={ styles.forgotPasswordWrapper }>
            <Text style={ styles.forgotPasswordText }>忘记密码?</Text>
        </View>

      </View>
    )
  }
}

/**
 * ## Styles
 */
var styles = StyleSheet.create({

    forgotPasswordWrapper: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10
    },

    forgotPasswordText: {
        fontSize: 16,
    }

})

export default connect(null, mapDispatchToProps)(LoginRender)
