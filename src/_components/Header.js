/**
* # Header.js
*
 * This component initially displays a image. But when clicked, things
 * get interesting.
*/
'use strict'

/**
 * ## Imports
 *
 * React
*/
import React, {PropTypes} from 'react'
import
{
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

/**
 * Project component that will respond to onPress
 */
const FormButton = require('./FormButton')
/**
 * ## Styles
 */
var styles = StyleSheet.create({
  header: {
    //   position:'absolute',
    //   right:0,
    //   left:0,
    //   top:0,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
})

var Header = React.createClass({
  /**
   * ### propTypes
   * * isFetching: display the spinner if true
   * * showState: should the JSON state, currentState, be displayed
   * * currentState: the JSON state
   * * onGetState: the action to call to get the current state
   * * onSetState: the action to call to set the state
   */
  propTypes: {
    isFetching: PropTypes.bool,
  },
  /**
   * ### render
   *
   *    人客合一登录页头部渲染
   *    Render function for header of renke login page
   */
  render () {

    return (

        <View style={styles.header}>

            <Text>孩子王</Text>
            <Text>人客合一</Text>
            {/*this.props.isFetching
             ? <ActivityIndicator animating size='large' />
             : null
          */}

        </View>

    )
  }
})

module.exports = Header
