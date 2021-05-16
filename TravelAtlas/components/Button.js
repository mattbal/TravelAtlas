import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/Colors';

const StyledPressable = styled.TouchableHighlight`
  background: ${(props) => props.bgColor || '#393939'};
  border-radius: 4px;
  padding: 14px 0;
  justify-content: center;
  margin: ${(props) => props.margin || '0'};
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-family: Inter-Medium;
  color: ${(props) => props.color || 'white'};
  text-align: center;
`;

const Button = ({ text, bgColor, color, margin, onPress, underlayColor }) => {
  return (
    <StyledPressable
      bgColor={bgColor}
      margin={margin}
      onPress={onPress}
      underlayColor={underlayColor}
    >
      <StyledText color={color}>{text}</StyledText>
    </StyledPressable>
  );
};

export default Button;
