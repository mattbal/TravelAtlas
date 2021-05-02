import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import img from '../assets/flamingo-bg.jpg';
import { Colors } from '../styles/Colors';
import Button from '../components/Button';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Home = () => {
  return (
    <SafeArea>
      <Screen></Screen>
    </SafeArea>
  );
};

export default Home;
