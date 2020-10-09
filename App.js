import React from 'react';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginContainer from './screens/login/LoginContainer';
import RegistationContainer from './screens/registration/RegistrationContainer';
import DryCleaningPlacesContainer from './screens/admin/dryCleaningPlaces/DryCleaningPlacesContainer';
import AddNewPlaceContainer from './screens/admin/dryCleaningPlaces/addNewPlace/AddNewPlaceContainer';
import OrdersContainer from './screens/admin/orders/OrdersContainer';
import SelectedOrderContainer from './screens/admin/orders/selectedOrder/SelectedOrderContainer';
import ClientsContainer from './screens/admin/clients/ClientsContainer';

import DryCleaningPlacesClientContainer from './screens/client/dryCleaningPlaces/DryCleaningPlacesClientContainer';
import SelectedPlaceContainer from './screens/client/selectedPlace/SelectedPlaceContainer';
import OrdersClientContainer from './screens/client/orders/OrdersClientContainer';

const Login = createStackNavigator({
  Login: {screen: LoginContainer, navigationOptions: {header: null}},
  Registration: {screen: RegistationContainer, navigationOptions: {header: null}}
});

const DryCleaningPlaces = createStackNavigator({
  DryCleaningPlaces: {screen: DryCleaningPlacesContainer, navigationOptions: {header: null}},
  AddNewPlace: {screen: AddNewPlaceContainer, navigationOptions: {header: null}}
});

const Orders = createStackNavigator({
  Orders: {screen: OrdersContainer, navigationOptions: {header: null}},
  SelectedOrder: {screen: SelectedOrderContainer, navigationOptions: {header: null}}
});

const Admin = createBottomTabNavigator(
  {
    DryCleaningPlaces: {
      screen: DryCleaningPlaces,
      navigationOptions: {tabBarIcon: ({ focused }) => 
        <Icon 
          size={35}
          name="place"
          color={focused ? '#ffd700' : "#CC8400"}
          type="material-icons"
        />}
    },
    Orders: {
      screen: Orders,
      navigationOptions: {tabBarIcon: ({ focused }) => 
      <Icon 
        size={35}
        name="border-all"
        color={focused ? '#ffd700' : "#CC8400"}
        type="FontAwesome5"
      />}
    },
    Clients: {
      screen: ClientsContainer,
      navigationOptions: {tabBarIcon: ({ focused }) => 
      <Icon 
        size={35}
        name="users"
        color={focused ? '#ffd700' : "#CC8400"}
        type="entypo"
      />}
    }
  }, 
  {
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#3C4146',
      inactiveBackgroundColor: '#3C4146',
      activeTintColor: 'white',
    }
  }
)

const DryCleaningPlacesClient = createStackNavigator({
  DryCleaningPlaces: {screen: DryCleaningPlacesClientContainer, navigationOptions: {header: null}},
  SelectedPlace: {screen: SelectedPlaceContainer, navigationOptions: {header: null}}
});

const Client = createBottomTabNavigator(
  {
    DryCleaningPlaces: {
      screen: DryCleaningPlacesClient,
      navigationOptions: {tabBarIcon: ({ focused }) => 
        <Icon 
          size={35}
          name="place"
          color={focused ? '#0080FF' : "white"}
          type="material-icons"
        />}
    },
    OrdersClientContainer: {
      screen: OrdersClientContainer,
      navigationOptions: {tabBarIcon: ({ focused }) => 
        <Icon 
          size={35}
          name="border-all"
          color={focused ? '#0080FF' : "white"}
          type="FontAwesome5"
        />}
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#3C4146',
      inactiveBackgroundColor: '#3C4146',
      activeTintColor: 'white',
    }
  }
)

const AppNavigator = createSwitchNavigator({
  Login: {screen: Login},
  Admin: {screen: Admin},
  Client: {screen: Client}
});

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}