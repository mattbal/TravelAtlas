import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
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

const StyledView = styled.View`
  height: 100%;
`;

const Background = styled.View`
  flex: 1;
  background: white;
`;

const Signup = ({ navigation, handleSubmit }) => {
  return (
    <Background>
      <SafeArea>
        <Screen>
          <Wrapper>
            <StyledPressable onPress={() => navigation.goBack()} activeOpacity={0.9}>
              <BackIcon />
            </StyledPressable>
            <StyledHeader>Signup</StyledHeader>
            <Formik
              initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
              onSubmit={(values) => {}}
            >
              {(props) => (
                <View>
                  <StyledText>Name</StyledText>
                  <Input
                    autoFocus
                    autoCapitalize='words'
                    onChangeText={props.handleChange('name')}
                    value={props.values.name}
                  />
                  <StyledText>Email</StyledText>
                  <Input
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
                  <StyledText>Confirm Password</StyledText>
                  <Input
                    secureTextEntry
                    type='password'
                    onChangeText={props.handleChange('confirmPassword')}
                    value={props.values.confirmPassword}
                  />
                  <Button
                    margin='24px 0 0 0'
                    bgColor='#393939'
                    text='Signup'
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

export default Signup;
