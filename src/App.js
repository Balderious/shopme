import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Splashscreen from './splashscreen';

export default class App extends Component {
  render() {
    return (
      <Splashscreen />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

const mapStateToProps = (state) => {
  return {
    //active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onClick: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter))
    // }
  }
}

const FilterLink = connect( mapStateToProps, mapDispatchToProps)(App)
