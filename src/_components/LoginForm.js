/**
 * # LoginForm.js
 *
 * This class utilizes the ```tcomb-form-native``` library and just
 * sets up the options required for the 3 states of Login, namely
 * Login, Register or Reset Password
 *
 */
'use strict'
/**
 * ## Import
 *
 * React
 */
import React, {PropTypes} from 'react'
/**
 *  The fantastic little form library
 */
// const t = require('tcomb-form-native')
// let Form = t.form.Form
/**
 * States of login display
 */
const {
  LOGIN,
  FORGOT_PASSWORD
} = require('../lib/constants').default

/**
 *  import rn modules
 */
import
{
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    View
}
from 'react-native'

var LoginForm = React.createClass({
  /**
   * ## LoginForm class
   *
   * * form: the properties to set into the UI form
   * * value: the values to set in the input fields
   * * onChange: function to call when user enters text
   */
  propTypes: {
  },

  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render () {

    /**
     * ### Return
     * returns the Form component with the correct structures
     */
    return (

      <View style={ [styles.loginFormWrapper] }>

            <View style={ [styles.inputAccountWrapper] }>

                <View style={ [styles.labelAccountWrapper] }>
                    <Text style={ [styles.labelAccount] }>账号</Text>
                </View>

                <TextInput
                    style={ [styles.inputAccount] }
                    autoFocus
                    placeholder={'请输入您的帐号'}
                    maxLength={10}
                    numberOfLines={1}></TextInput>

            </View>

            <View style={ [styles.inputPasswordWrapper] }>

                <View style={ [styles.labelPasswordWrapper] }>
                    <Text style={ [styles.labelPassword] }>密码</Text>
                </View>

                <TextInput
                    style={ [styles.inputPassword] }
                    autoFocus
                    placeholder={'请输入密码'}
                    maxLength={10}
                    secureTextEntry
                    numberOfLines={1}></TextInput>

            </View>

      </View>

    )
  }
})

const styles = StyleSheet.create({

    loginFormWrapper: {
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center'
    },

        inputAccountWrapper: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
            borderStyle: 'solid'
        },

            labelAccountWrapper: {
                flex: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'flex-start'
            },

                labelAccount: {
                    fontSize: 16,
                },

            inputAccount: {
                flex: 3,
                height: 40,
                fontSize: 16,
                alignItems: 'center',
                textAlignVertical: 'center'
            },


        inputPasswordWrapper: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#ddd',
            borderStyle: 'solid'
        },

            labelPasswordWrapper: {
                flex: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'flex-start'
            },

                labelPassword: {
                    fontSize: 16,
                },

            inputPassword: {
                flex: 3,
                height: 40,
                fontSize: 16,
                alignItems: 'center',
                textAlignVertical: 'center'
            },


})

module.exports = LoginForm
