import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList194951Navigator from '../features/ArticleList194951/navigator';
import UserProfile394949Navigator from '../features/UserProfile394949/navigator';
import Camera494948Navigator from '../features/Camera494948/navigator';
import Maps594947Navigator from '../features/Maps594947/navigator';
import Feed794945Navigator from '../features/Feed794945/navigator';
import Messaging994943Navigator from '../features/Messaging994943/navigator';
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
ArticleList194951: { screen: ArticleList194951Navigator },
UserProfile394949: { screen: UserProfile394949Navigator },
Camera494948: { screen: Camera494948Navigator },
Maps594947: { screen: Maps594947Navigator },
Feed794945: { screen: Feed794945Navigator },
Messaging994943: { screen: Messaging994943Navigator },
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
