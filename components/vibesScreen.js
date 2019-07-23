import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { VibesContext } from './MyContext';

export default class Page2 extends React.Component {
  render() {
    return (
      <VibesContext.Consumer>
        {
         values => {
            return (
              <View style={styles.container}>
                <Text>{`Hello ${values.playerName}`}</Text>
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
    alignItems: 'center'
  }
})