/**
 * # app.js
 *  Display startup screen and
 *  getSessionTokenAtStartup which will navigate upon completion
 *  check user idendity at start up
 *  updated by timwu @ haiziwang
 *  9/7/2016, 6:46:05 PM
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * Project actions
 */
import * as authActions from '../reducers/_auth/authActions'

/**
 * The components we need from ReactNative
 */
import React from 'react'
import
{
    StyleSheet,
    ListView,
    ScrollView,
    View,
    Text
}
from 'react-native'

/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../components/Header'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version,
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
};

/**
 * Bind all the actions from authActions, deviceActions and globalActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  }
}

var styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

/**
 * ## App class
 */
var reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

let App = React.createClass({
    /**
     * See if there's a sessionToken from a previous login
     *
     */
  componentDidMount () {

          // Use a timer so App screen is displayed
      this.setTimeout(
              () => {
                this.props.actions.login()
              },
              2500
          )

  },

  render () {
    return (
      <View style={styles.container}>
            <Text>Tim is Loading Here</Text>
      </View>
    )
  }
})
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
