import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { VibesContext } from '../context/vibesContext';
import Play from '../features/vibesButtons';

export default class Page2 extends React.Component {
  render() {
    return (
      <VibesContext.Consumer>
        {
         values => {
            return (
              <View style={styles.container}>
                <Text style={styles.header}>{`Hello,  ${values.playerName}`}</Text>
                <Play />
              </View>
            )
          }
        }
      </VibesContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',

  }
});