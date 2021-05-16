import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/Colors';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.View`
  padding: 18px;
  padding-top: 48px;
  height: 100%;
`;

const StyledHeader = styled.Text`
  font-size: 24px;
  font-family: Inter-Bold;
  color: ${(props) => props.color || Colors['coolGray-800']};
  margin-bottom: 24px;
`;

const StyledP = styled.Text`
  font-size: 16px;
  font-family: Inter;
  color: ${(props) => props.color || 'white'};
`;

const Background = styled.View`
  flex: 1;
  background: white;
`;

const Home = () => {
  return (
    <Background>
      <SafeArea>
        <Screen>
          <Wrapper>
            <StyledHeader>Find a trip</StyledHeader>
          </Wrapper>
        </Screen>
      </SafeArea>
    </Background>
  );
};

export default Home;
