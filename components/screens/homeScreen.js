import React from 'react';
import { View, Button, StyleSheet, TextInput, Image } from 'react-native';
import { VibesContext } from '../context/vibesContext';

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }

  _navigate = () => {
    this.props.navigation.navigate('Page2');
  };

  render() {
    return (
      <VibesContext.Consumer>
        {values => {
          return (
            <View style={styles.container}>
              <Image style={styles.logo} source={require('../../assets/vibes.png')}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Type your name"
                value={values.playerName}
                onChangeText={playerName =>
                  values.handleChange('playerName', playerName)
                }
              />
              <Button style={styles.play} onPress={this._navigate} title="I want to play a game" />
            </View>
          );
        }}
      </VibesContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginBottom: 50,
  },

  inputField: {
    marginBottom: 50,
  },

  play: {
    marginBottom: 400,
    
  },
});
