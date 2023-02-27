import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
    }
}

export const darkTheme: DefaultTheme = {
    body: '#3B4664',
    text: '#FEFFFD',
};

export const lightTheme: DefaultTheme = {
    body: '#E6E6E6',
    text: '#34342A',
};

export const purpleTheme = {
    body: '#17062A',
    text: '#FFE43E',
};
