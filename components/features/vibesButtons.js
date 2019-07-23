import React from 'react';
import { Button, StyleSheet, View, Vibration } from 'react-native';

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
       <Button
         id="1"
         title="1"
         onPress={startVibration1}
         />
       <Button
         id="2"
         title="2"
         onPress={startVibration2}
         />
       <Button
         id="3"
         title="3"
         onPress={startVibration3}
         />
       <Button
         id="4"
         title="4"
         onPress={startVibration4}
         />
     </View>
     </View>
   </View>
 );
}
const styles = StyleSheet.create ({
 container: {
   flex: 1,
   justifyContent: 'center',
 },
 buttonContainer: {
   margin: 50,
   flexDirection: 'row',
   justifyContent: 'space-around'
 }
});
export default Play;