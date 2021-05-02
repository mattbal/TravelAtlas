import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-bottom: 48px;
`;

const Search = () => {
  return (
    <Screen>
      <Text value='Search page' />
    </Screen>
  );
};

export default Search;
