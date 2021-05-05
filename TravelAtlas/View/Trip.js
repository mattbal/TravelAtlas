import React from 'react';
import { View, Text, Image, SafeAreaView, Button } from 'react-native';
import styled from 'styled-components/native';

//import sanDiego from '../assets/sanDiego.jpeg';

const Body = styled.View`
  align-items: center;
  justify-content: center;
`;

const TopImage = styled.Image`
  width: 600;
  height: 300;
`;

const Activity = styled.Button`
  width: 100;
  height: 100;
`;

const Trip = () => {
  return (
    <Body>
      <TopImage source={require('../assets/losangeles.jpg')} />
      <Text> San Diego </Text>
      <Activity title='Activity 1' onPress={() => console.log('Activity 1 Info')} />
    </Body>
  );
};

export default Trip;
