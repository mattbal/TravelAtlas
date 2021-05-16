import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
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

const Input = styled.TextInput`
  margin-bottom: 14px;
  padding: 10px;
  border: 1px solid ${Colors['coolGray-300']};
  font-size: 14px;
  border-radius: 6px;
`;

const Wrapper = styled.View`
  padding: 18px;
  padding-top: 48px;
  height: 100%;
`;

const StyledText = styled.Text`
  font-size: 12px;
  font-family: Inter-Medium;
  margin-bottom: 4px;
`;

const StyledHeader = styled.Text`
  font-size: 24px;
  font-family: Inter-Bold;
  color: ${(props) => props.color || Colors['coolGray-800']};
  margin-bottom: 24px;
`;

const Background = styled.View`
  flex: 1;
  background: white;
`;

const Profile = () => {
  return (
    <Background>
      <SafeArea>
        <Screen>
          <Wrapper>
            <StyledHeader>Profile</StyledHeader>
          </Wrapper>
        </Screen>
      </SafeArea>
    </Background>
  );
};

export default Profile;
