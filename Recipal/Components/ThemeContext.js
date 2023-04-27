import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // toggle between light and dark theme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
