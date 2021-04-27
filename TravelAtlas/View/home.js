import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Body>
      <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>Test Home Screen</Text>
    </Body>
  );
};

export default Home;
