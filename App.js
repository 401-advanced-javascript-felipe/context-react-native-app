import * as React from 'react';
import NavigationProvider from './components/context/vibesContext';
import AppNavigator from './components/screens/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider>
        <AppNavigator />
      </NavigationProvider>
    );
  }
}
