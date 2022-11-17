import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

const AuthStack = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="SignIn"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
          },
          /* tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }, */
        })}>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={
            {
              /* tabBarIcon: ({focused, color, size}) => {
              focused ? (
                <Ionicons name={'log-in'} size={size} color={color} />
              ) : (
                <Ionicons name={'log-in-outline'} size={size} color={color} />
              );
            }, */
            }
          }
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={
            {
              /* tabBarIcon: ({focused, color, size}) => {
              focused ? (
                <Ionicons name={'person-add'} size={size} color={color} />
              ) : (
                <Ionicons
                  name={'person-add-outline'}
                  size={size}
                  color={color}
                />
              );
            }, */
            }
          }
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
