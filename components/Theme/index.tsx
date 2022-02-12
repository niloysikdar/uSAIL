import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './config';

const Theme: FC = (props) => {
  const theme = createTheme(themeOptions);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export { Theme };
