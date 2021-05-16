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
import flamingo from '../assets/flamingo-bg.jpg';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const Wrapper = styled.View`
  padding: 18px;
  height: 100%;
`;

const StyledHeader = styled.Text`
  font-size: 32px;
  font-family: Inter-Bold;
  color: ${(props) => props.color || 'white'};
  margin-bottom: 10px;
`;

const StyledP = styled.Text`
  font-size: 16px;
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

const GetStarted = ({ navigation }) => {
  return (
    <Background source={flamingo} resizeMode='cover'>
      <SafeArea>
        <Screen>
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
                onPress={() => {
                  navigation.navigate('Signup');
                }}
                underlayColor={Colors['coolGray-200']}
              />
              <Button
                bgColor='#393939'
                text='Login'
                onPress={() => {
                  navigation.navigate('Login');
                }}
                underlayColor={'#4D4D4D'}
              />
            </ButtonWrapper>
          </Wrapper>
        </Screen>
      </SafeArea>
    </Background>
  );
};

export default GetStarted;
