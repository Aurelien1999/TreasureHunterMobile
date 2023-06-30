import * as React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { NavigationContainer } 
         from '@react-navigation/native';
import { createBottomTabNavigator } 
         from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Accueil from './source/accueil.js'
import Equipement from './source/equipement.js'
import Store from './source/store.js'
import Collection from './source/collection.js'

  
const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <NavigationContainer >
      <StatusBar hidden/>
      <Tab.Navigator initialRouteName={Accueil}
       screenOptions={({ route }) => ({
         headerShown : false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused
              ? 'home' : 'home';
            return <FontAwesome5 name={iconName} size={22} color={'black'} />
          } else if (route.name === 'Equipement') {
            iconName = focused ? 'wrench' : 'wrench';
            return <FontAwesome5 name={iconName} size={20} color={'black'} />;
          } else if (route.name === 'Collection') {
            iconName = focused ? 'coins' : 'coins';
            return <FontAwesome5 name={iconName} size={20} color={'black'} />;
          } else if (route.name === 'Store') {
            iconName = focused ? 'store' : 'store';
            return <FontAwesome5 name={iconName} size={20} color={'black'} />;
          }

        },
        tabBarActiveTintColor: '#444444',
        tabBarInactiveTintColor: 'black',
      })}
        tabBarOptions={{
          activeTintColor: '#ffffff',
          activeBackgroundColor: '#DDDDDD',
          inactiveBackgroundColor: '#ffffff',
          style: {height: 80},
          labelStyle: {paddingBottom: 5, fontSize: 10}
        }}
      >
        <Tab.Screen name="Accueil" component={Accueil}  />
        <Tab.Screen name="Equipement" component={Equipement} />
        <Tab.Screen name="Collection" component={Collection} />
        <Tab.Screen name="Store" component={Store} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}