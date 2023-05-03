import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from './ThemeContext';


const ThemedTextBox = ({ children, style, ...props }) => {
  const { theme } = useContext(ThemeContext);

  const themedTextBoxStyle = {
    color: theme.colors.text,
    ...style,
  };

  return (
    <Text style={themedTextBoxStyle} {...props}>
      {children}
    </Text>
  );
};

export default ThemedTextBox;
