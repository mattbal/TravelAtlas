import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/Colors';

const StyledPressable = styled.TouchableOpacity`
  background: ${(props) => props.bgColor || '#393939'};
  border-radius: 4px;
  padding: 14px 0;
  justify-content: center;
  margin: ${(props) => props.margin || '0'};
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  color: ${(props) => props.color || 'white'};
  text-align: center;
`;

const Button = ({ text, bgColor, color, margin, onPress }) => {
  return (
    <StyledPressable bgColor={bgColor} margin={margin} onPress={onPress}>
      <StyledText color={color}>{text}</StyledText>
    </StyledPressable>
  );
};

export default Button;
