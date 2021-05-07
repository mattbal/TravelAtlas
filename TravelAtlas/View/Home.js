import { NavigationHelpersContext } from '@react-navigation/core';
import React from 'react';
import { Text} from 'react-native';
import styled from 'styled-components/native';

import img from "../assets/homeBackground.jpeg"
import img1 from "../assets/palmTree.jpeg"

const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Body>
      <Screen>
        <Background>
          <PalmTree></PalmTree>
          <HomeText style={{color: "white", fontSize: 50}}>
          Welcome To TravelAtlas
          </HomeText>
        </Background>
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

const Wrapper = styled.View`
    display: flex;
    text-align: center;
    image: 
    margin-top: 7%;
    margin-bottom: auto;
    padding: 27px 18px 18px;
    `;

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: white;
`;

const PalmTree = styled.View`
  flex: 1;
  position: absolute;
  background-image: url(${img1});
  width: 7%;
  height: 7%;
  margin-top: 1.4%;
  background-size: contain;
  background-repeat: no-repeat;
    `;

const HomeText = styled.View`
    display: flex;
    text-align: center; 
    margin-top: 7%;
    margin-bottom: auto;
    `;

export default Home;
