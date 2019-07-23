import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { VibesContext } from './MyContext';

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
              <TextInput
                placeholder="Type your name"
                value={values.playerName}
                onChangeText={playerName =>
                  values.handleChange('playerName', playerName)
                }
              />
              <Button onPress={this._navigate} title="I want to play a game" />
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
});
