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

const Background = styled.View`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const Wrapper = styled.View`
  padding: 18px;
  height: 100%;
`;

const StyledHeader = styled.Text`
  font-size: 32px;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.color || 'white'};
  margin-bottom: 10px;
`;

const StyledP = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-family: Inter;
  color: ${(props) => props.color || 'white'};
`;

const TitleWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const SplashScreen = () => {
  return (
    <SafeArea>
      <Screen>
        <Background></Background>
        <Wrapper>
          <TitleWrapper>
            <StyledHeader>TravelAtlas</StyledHeader>
            <StyledP>Find your next dream vacation.</StyledP>
          </TitleWrapper>
          <ButtonWrapper>
            <Button
              color={Colors['coolGray-800']}
              bgColor={Colors['coolGray-50']}
              text='Signup'
              margin='0 0 14px'
            />
            <Button bgColor='#393939' text='Login' />
          </ButtonWrapper>
        </Wrapper>
      </Screen>
    </SafeArea>
  );
};

export default SplashScreen;
