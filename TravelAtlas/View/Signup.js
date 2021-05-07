import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { Formik } from 'formik';
import { Colors } from '../styles/Colors';
import { BackIcon } from '../assets/Icons';

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

const StyledPressable = styled.TouchableOpacity`
  justify-content: center;
  margin-bottom: 24px;
  width: 20px;
  height: 20px;
`;

const StyledView = styled.View`
  height: 100%;
`;

const Signup = ({ navigation, handleSubmit }) => {
  return (
    <SafeArea>
      <Screen>
        <Wrapper>
          <StyledPressable onPress={() => navigation.goBack()}>
            <BackIcon />
          </StyledPressable>
          <StyledHeader>Signup</StyledHeader>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values) => {}}
          >
            {(props) => (
              <View>
                <StyledText>Name</StyledText>
                <Input
                  placeholder='Enter your name'
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
                <StyledText>Email</StyledText>
                <Input
                  placeholder='Enter your email'
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
                <StyledText>Password</StyledText>
                <Input
                  placeholder='Enter your password'
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <StyledText>Confirm Password</StyledText>
                <Input
                  placeholder='Enter your password'
                  onChangeText={props.handleChange('password')}
                  value=''
                />
                <Button
                  margin='24px 0 0 0'
                  bgColor='#393939'
                  text='Signup'
                  onPress={() => navigation.navigate('TabBar')}
                />
              </View>
            )}
          </Formik>
        </Wrapper>
      </Screen>
    </SafeArea>
  );
};

export default Signup;
