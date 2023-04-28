import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const lightTheme = {
    colors: {
      background: '#fff',
      primary: '#007AFF',
      text: '#333333',
    },
  };

  const darkTheme = {
    colors: {
      background: '#333333',
      primary: '#333333',
      text: '#ffffff',
    },
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeObject = {
    theme: theme === 'light' ? lightTheme : darkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeObject}>
      {children}
    </ThemeContext.Provider>
  );
};
