/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import 'styled-components';
import { PaletteColorOptions, PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        contrastText: string;
        main: string;
        dark: string;
        light: string;
      };
    };
  }
}

declare module '@mui/material/styles' {
  export interface PaletteColorOptions {
    contrastText?: string;
    main?: string;
    dark?: string;
    light?: string;
  }
  export interface PaletteColor {
    contrastText?: string;
    main?: string;
    dark?: string;
    light?: string;
  }
  export interface SimplePaletteColorOptions {
    contrastText?: string;
    main?: string;
    dark?: string;
    light?: string;
  }
}
