import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
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
              <TouchableOpacity onPress={this._navigate}> 
                <Text style={styles.button} >I want to play a game</Text>
              </TouchableOpacity>
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
    marginBottom: 175,
  },

  logo: {
    marginBottom: 50,
  },

  inputField: {
    marginBottom: 25,
  },

  button: {
    backgroundColor: 'purple',
    padding: 10,
    fontSize: 20,
    color: 'yellow',
    borderRadius: 15,
    shadowOffset: { width: 5, height: 5, },
    shadowColor: 'grey',
    shadowOpacity: 0.7,
  }
});
