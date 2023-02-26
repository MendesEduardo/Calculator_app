import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, purpleTheme } from './Themes/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import Calculator from './Calculator';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'purple'>('light');

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value as 'light' | 'dark' | 'purple');
  };

  const themes = [
    { id: 1, name: 'Light', value: 'light' },
    { id: 2, name: 'Dark', value: 'dark' },
    { id: 3, name: 'Purple', value: 'purple' },
  ];

  return (
    <ThemeProvider
      theme={
        theme === 'light'
          ? lightTheme
          : theme === 'dark'
            ? darkTheme
            : purpleTheme
      }>
      <GlobalStyles />
      <div>
        {themes.map((themeOption) => (
          <label key={themeOption.id}>
            <input
              type="checkbox"
              value={themeOption.value}
              checked={theme === themeOption.value}
              onChange={handleThemeChange}
            />
            {themeOption.name}
          </label>
        ))}
      </div>
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
