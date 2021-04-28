import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../styles/Colors';
import Home from '../view/Home';
import Search from '../view/Search';
// import Trips from '../view/Trip';
// import Profile from '../view/Profile';

const Wrapper = styled.View`
  display: flex;
`;

const HomeIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
    </Svg>
  );
};

const SearchIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path
        fillRule='evenodd'
        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      />
    </Svg>
  );
};

const TripsIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
    </Svg>
  );
};

const ProfileIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
    </Svg>
  );
};

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            // if (route.name == 'test') {
            // }

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
        {/* <Tab.Screen name='Trips' component={Trips} /> */}
        {/* <Tab.Screen name='Profile' component={Profile} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
