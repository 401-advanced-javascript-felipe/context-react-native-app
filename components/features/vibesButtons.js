import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Vibration, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Play() {
 let PATTERN1 = [ 1000, 2000, 3000, 4000, 1000 ];
 let PATTERN2 = [ 0, 400, 800, 600, 800, 800, 1000 ];
 let PATTERN3 = [ 0, 10, 0, 20, 0, 10, 0, 20 ];
 let PATTERN4 = [ 75, 100, 125, 150, 175, 200, 225 ];
 startVibration1 = () => {
   Vibration.vibrate(PATTERN1);
 }
 startVibration2 = () => {
   Vibration.vibrate(PATTERN2);
 }
 startVibration3 = () => {
   Vibration.vibrate(PATTERN3);
 }
 startVibration4 = () => {
   Vibration.vibrate(PATTERN4);
 }
 return (
   <View style={styles.container}>
     <View style={styles.buttonContainer}>
     <View style={{ margin: 10}}>

      <Animatable.View animation="slideInLeft" iterationCount="infinite" direction="alternate" delay={1500}>
        <TouchableOpacity onPress={startVibration1}>
          <Text style={styles.button}>1</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="slideInDown" iterationCount="infinite" direction="alternate" delay={1500}> 
        <TouchableOpacity onPress={startVibration2}>
          <Text style={styles.button}>2</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="slideInRight" iterationCount="infinite" direction="alternate" delay={1500}> 
        <TouchableOpacity onPress={startVibration3}>
          <Text style={styles.button}>3</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="slideInUp" iterationCount="infinite" direction="alternate" delay={1500}>
        <TouchableOpacity onPress={startVibration4}>
          <Text style={styles.button}>4</Text>
        </TouchableOpacity>
      </Animatable.View>
     </View>
     </View>
   </View>
 );
}
const styles = StyleSheet.create ({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'stretch',
 },
 buttonContainer: {
   margin: 50,
   flexDirection: 'row',
   justifyContent: 'space-around'
 },

  button: {
    lineHeight: 40,
    backgroundColor: 'purple',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'yellow',
    width: 65,
    height: 65,
    borderRadius: 65/2,
    borderWidth: 1,
    overflow: 'hidden',
  },

});
export default Play;