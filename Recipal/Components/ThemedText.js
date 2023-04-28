import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ThemedText = ({ children, style, ...props }) => {
  const { theme } = useContext(ThemeContext);

  const themedTextStyle = {
    color: theme.colors.text,
    ...style,
  };

  return (
    <Text style={themedTextStyle} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
