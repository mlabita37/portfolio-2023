import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { ThemeProvider } from 'theme-ui';
import { theme } from './src/theme';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
