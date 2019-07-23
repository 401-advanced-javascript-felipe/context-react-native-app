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
              <View style={styles.form}>
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
    backgroundColor: '#dcdcdc',
  },

  form: {
    alignItems: 'center',
    marginBottom: 175,
  },

  logo: {
    marginTop: 25,
    marginBottom: 50,
    shadowOffset: { width: 5, height: 5, },
    shadowColor: 'grey',
    shadowOpacity: 0.9,

  },

  inputField: {
    marginBottom: 25,
    paddingTop: 7,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 7,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#f5fffa',
  },

  button: {
    backgroundColor: 'purple',
    padding: 10,
    fontSize: 20,
    color: 'yellow',
    shadowOffset: { width: 5, height: 5, },
    shadowColor: 'grey',
    shadowOpacity: 0.7,
  }
  
});
