import * as React from 'react';
import NavigationProvider from './components/MyContext'
import AppNavigator from './components/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider>
        <AppNavigator />
      </NavigationProvider>
    );
  }
}
