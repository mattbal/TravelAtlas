import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../styles/Colors';
import Home from '../view/Home';
import Search from '../view/Search';
// import Trips from '../view/Trips';
import Trip from '../view/Trip';
import Profile from '../view/Profile';
import {TripsIcon} from '../assets/Icons';
import {HomeIcon} from '../assets/Icons';
import { ProfileIcon, SearchIcon } from '../assets/Icons';

const Wrapper = styled.View`
  display: flex;
`;

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home') {
              return <HomeIcon color={color} />;
            } else if (route.name === 'Search') {
              return <SearchIcon color={color} />;
            } else if (route.name === 'Trips') {
              return <TripsIcon color={color} />;
            } else if (route.name === 'Profile') {
              return <ProfileIcon color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors['coolGray-600'],
          inactiveTintColor: Colors['coolGray-400'],
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Trips' component={Trip} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
