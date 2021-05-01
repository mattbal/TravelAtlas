import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, SafeAreaView, Button} from 'react-native';
import styled from 'styled-components/native';

import img from "../assets/flamingo-bg.jpg"

const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Body>
      <Screen>
        <Background></Background>
        <Wrapper>
          <Button title="Signup">  
          </Button>
          <Button title="Login">  
          </Button>
        </Wrapper>
      </Screen>
    </Body>
  );
};

const Background = styled.View`
    flex-grow: 1;
    border: 1px solid #000;
    background-image: url(${img});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    `;

const BackgroundColor = styled.View`
    flex: 1;
    background: "blue";
    `;

const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
    padding: 27px 18px 18px;
    `;

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export default Home;
