import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList1094942Navigator from '../features/NotificationList1094942/navigator';
import Settings1194941Navigator from '../features/Settings1194941/navigator';
import SignIn21394939Navigator from '../features/SignIn21394939/navigator';
import Tutorial1494938Navigator from '../features/Tutorial1494938/navigator';
import BlankScreen094937Navigator from '../features/BlankScreen094937/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList1094942: { screen: NotificationList1094942Navigator },
Settings1194941: { screen: Settings1194941Navigator },
SignIn21394939: { screen: SignIn21394939Navigator },
Tutorial1494938: { screen: Tutorial1494938Navigator },
BlankScreen094937: { screen: BlankScreen094937Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
