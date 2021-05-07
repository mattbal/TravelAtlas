import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/Colors';
import { Formik } from 'formik';
import Button from '../components/Button';

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

const StyledPressable = styled.TouchableOpacity`
  justify-content: center;
  margin-bottom: 24px;
  width: 20px;
  height: 20px;
`;

const Search = () => {
  return (
    <SafeArea>
      <Screen>
        <Wrapper>
          <StyledHeader>Search</StyledHeader>
          <Formik
            initialValues={{ search: '', date: '', price: '', activities: '' }}
            onSubmit={(values) => {}}
          >
            {(props) => (
              <View>
                <StyledText>Date</StyledText>
                <Input
                  placeholder='Select a date'
                  onChangeText={props.handleChange('date')}
                  value={props.values.date}
                />
                <StyledText>Price</StyledText>
                <Input
                  placeholder='Enter price range'
                  onChangeText={props.handleChange('price')}
                  value={props.values.price}
                />
                <StyledText>Activities</StyledText>
                <Input
                  placeholder='What kind of activities would you like to do on this trip?'
                  onChangeText={props.handleChange('activities')}
                  value={props.values.activities}
                />
                <Input
                  placeholder='Search for a trip'
                  onChangeText={props.handleChange('search')}
                  value={props.values.search}
                />
                <Button
                  bgColor='#393939'
                  text='Search'
                  onPress={() => console.log('Searched for trip')}
                />
              </View>
            )}
          </Formik>
        </Wrapper>
      </Screen>
    </SafeArea>
  );
};

export default Search;
