import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, purpleTheme } from './Themes/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import Calculator from './Calculator';
import './App.css';

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
      <main className='principal container'>
        <h1>Calc</h1>
        <div className="switch">
          {themes.map((themeOption) => (
            <label key={themeOption.id} >
              <p>{themeOption.id}</p>
              <input
                type="checkbox"
                value={themeOption.value}
                checked={theme === themeOption.value}
                onChange={handleThemeChange}
                className="theme-switch"
              />
              <span></span>
            </label>
          ))}
        </div>
      </main>
      <Calculator theme={theme} />
    </ThemeProvider>
  );
};

export default App;
