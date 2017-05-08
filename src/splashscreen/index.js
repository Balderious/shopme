import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react';

//const { width, height } = Dimensions.get('window');

class Splashscreen extends Component {

  componentDidMount() {
    setTimeout(function(){ alert("Hello world !"); }, 3000);
  }

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
