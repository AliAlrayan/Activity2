import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import AccountRecoveryPage from './AccountRecoveryPage';
import HomePage from './HomePage';

// Create a stack navigator using createStackNavigator from react-navigation
const AppNavigator = createStackNavigator(
  {
    // screens/pages and their corresponding components
    Landing: LandingPage,
    Login: LoginPage,
    Registration: RegistrationPage,
    AccountRecovery: AccountRecoveryPage,
    Home: HomePage,                         
  },
  {
    initialRouteName: 'Landing',
  }
);
// This container will be used as the root component for your React Native app
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;