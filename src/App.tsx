import { CssBaseline, Grid, NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from './assets/theme';
import { Toast } from './components';
import { RouterApp } from './routes';

export const App = () => (
	<BrowserRouter>
		<NextUIProvider theme={darkTheme}>
			<Grid.Container css={{ h: '100vh' }}>
				<RouterApp />
			</Grid.Container>
			<CssBaseline />
			<Toast />
		</NextUIProvider>
	</BrowserRouter>
);
