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

const StyledPressable = styled.TouchableOpacity`
  justify-content: center;
  margin-bottom: 24px;
  width: 20px;
  height: 20px;
`;

const Background = styled.View`
  flex: 1;
  background: white;
`;

const Login = ({ navigation, handleSubmit }) => {
  return (
    <Background>
      <SafeArea>
        <Screen>
          <Wrapper>
            <StyledPressable onPress={() => navigation.goBack()} activeOpacity={0.9}>
              <BackIcon />
            </StyledPressable>
            <StyledHeader>Login</StyledHeader>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {}}>
              {(props) => (
                <View>
                  <StyledText>Email</StyledText>
                  <Input
                    autoFocus
                    type='email'
                    keyboardType='email-address'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                  <StyledText>Password</StyledText>
                  <Input
                    secureTextEntry
                    type='password'
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                  />
                  <Button
                    bgColor='#393939'
                    text='Login'
                    onPress={() => navigation.navigate('TabBar')}
                    underlayColor={'#4D4D4D'}
                  />
                </View>
              )}
            </Formik>
          </Wrapper>
        </Screen>
      </SafeArea>
    </Background>
  );
};

export default Login;
