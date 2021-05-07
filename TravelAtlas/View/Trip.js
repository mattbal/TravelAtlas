import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/Colors';
import { Formik } from 'formik';
import trips from '../assets/TempTrips';
import image from '../assets/losangeles.jpg';
import sandiego from '../assets/sandiego.jpg';

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

const TopImage = styled.Image`
  height: 180;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const StyledText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const StyledTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  font-family: Inter;
  color: ${(props) => props.color || Colors['coolGray-800']};
`;

const StyledHeader = styled.Text`
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.color || Colors['coolGray-800']};
`;

const StyledPrice = styled.Text`
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  color: ${(props) => props.color || Colors['coolGray-800']};
  margin-left: auto;
`;

const StyledLocation = styled.Text`
  font-size: 12px;
`;

const StyledPressable = styled.TouchableOpacity`
  justify-content: center;
  margin-bottom: 24px;
  width: 20px;
  height: 20px;
`;

const StyledDiv = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
  align-items: center;
`;

const StyledEmpty = styled.View`
  height: 50px;
  width: 50px;
  background: ${Colors['coolGray-200']};
`;

const TripWrapper = styled.View`
  margin-bottom: 48px;
`;

const Trip = () => {
  return (
    <SafeArea>
      <Screen>
        <Wrapper>
          <StyledTitle>Trips</StyledTitle>
          <TripWrapper>
            <TopImage source={image} />
            <StyledDiv>
              <StyledHeader>Los Angeles</StyledHeader>
              <StyledPrice>$530</StyledPrice>
            </StyledDiv>
            <StyledLocation>Los Angeles, CA</StyledLocation>
          </TripWrapper>
          <TripWrapper>
            <TopImage source={sandiego} />
            <StyledDiv>
              <StyledHeader>San Diego</StyledHeader>
              <StyledPrice>$680</StyledPrice>
            </StyledDiv>
            <StyledLocation>San Diego, CA</StyledLocation>
          </TripWrapper>
        </Wrapper>
      </Screen>
    </SafeArea>
  );
};

export default Trip;
