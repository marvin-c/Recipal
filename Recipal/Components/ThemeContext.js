import React, { createContext, useState } from 'react';


export const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const lightTheme = {
    colors: {
      background: '#fff',
      primary: '#FFC800',
      text: 'black',
    },
  };

  const darkTheme = {
    colors: {
      background: '#333333',
      primary: '#FFC800',
      text: '#ffffff',
      buttonText: 'black', 
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
