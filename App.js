import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import { View, StatusBar } from 'react-native'

import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";

import Menu from './src/views/menu/index';
import ViewBurger from './src/views/menu/viewburger';
import History from './src/views/history/index';
import Cart from './src/views/cart/index';

const TabNavigator = createMaterialTopTabNavigator({
  Menu: { screen: Menu },
  History: { screen: History },
  Cart: { screen: Cart }
}, {
    initialRouteName: 'Menu',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#f2f2f2',
      inactiveTintColor: '#F4F6F9',
      style: {
        backgroundColor: '#FE9000', //FE9000
        borderTopColor: '#bfbfbf',
        borderTopWidth: 1
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    },
  }
);

const MenuStack = createStackNavigator(
  {
    Home: TabNavigator,
    ViewBurger: ViewBurger,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(MenuStack)

export default App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
      <StatusBar barStyle='dark-content'></StatusBar>
    </Provider>
  );
}


