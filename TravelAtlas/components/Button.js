import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/Colors';

const StyledPressable = styled.Pressable`
  background: ${(props) => props.bgColor || '#393939'};
  border-radius: 4px;
  padding: 14px 0;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  color: ${(props) => props.color || 'white'};
  text-align: center;
`;

const StyledView = styled.View`
  margin: ${(props) => props.margin || '0'};
`;

const Button = ({ text, bgColor, color, margin, onPress }) => {
  return (
    <StyledView margin={margin}>
      <StyledPressable bgColor={bgColor} onPress={() => onPress()}>
        <StyledText color={color}>{text}</StyledText>
      </StyledPressable>
    </StyledView>
  );
};

export default Button;
