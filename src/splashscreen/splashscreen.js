import React, { Component, Dimensions } from 'react';
import { connect } from 'react-redux';
import { View } from 'react';

const { width, height } = Dimensions.get('window');

class Splashscreen extends Component {

  render () {
    <View>
      <Image src={require('./../../img/groceries.png')}/>
      <Text>Quel plaisir de vous revoir !</Text>
    </View>
  }

}

const bindActions = (dispatch) => {
  return {
  };
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, bindActions)(Splashscreen);
