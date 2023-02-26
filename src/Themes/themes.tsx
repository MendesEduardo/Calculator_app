import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
    }
}

export const lightTheme: DefaultTheme = {
    body: '#FFFFFF',
    text: '#5c00b1',
};

export const darkTheme: DefaultTheme = {
    body: '#000',
    text: '#FFFFFF',
};

export const purpleTheme = {
    body: '#5c00b1',
    text: '#000000',
};
