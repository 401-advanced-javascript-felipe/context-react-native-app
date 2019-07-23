import { createStackNavigator,createAppContainer } from "react-navigation";
import Page1 from './homeScreen'
import Page2 from './vibesScreen'

const AppNavigator = createStackNavigator({
  Page1: {
    screen: Page1
  },
  Page2: {
    screen: Page2
  }
});

export default createAppContainer(AppNavigator);
