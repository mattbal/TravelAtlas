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
  height: 100vh;
  width: 100%;
  background: white;
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
  font-weight: 500;
  margin-bottom: 4px;
`;

const StyledHeader = styled.Text`
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.color || Colors['coolGray-800']};
  margin-bottom: 24px;
`;

const Profile = () => {
  return (
    <SafeArea>
      <Screen>
        <Wrapper>
          <StyledHeader>Profile</StyledHeader>
        </Wrapper>
      </Screen>
    </SafeArea>
  );
};

export default Profile;
