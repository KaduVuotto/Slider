import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 50,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          value={this.state.valor}
          minimumTrackTintColor={'#00FF00'}
          maximumTrackTintColor={'#FF0000'}
        />

        <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.valor.toFixed(0)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
})

export default App;
