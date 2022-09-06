import { createTheme } from '@nextui-org/react';

export const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			background: '#101010',
			opacity: 'rgba(0,0,0,.6)',
		},
	},
});

export const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			background: '#E9DAC1',
			backgroundContrast: '#FFF9CA',
			opacity: 'rgba(0,0,0,.6)'
		},
	},
});

