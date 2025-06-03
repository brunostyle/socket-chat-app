import { BrowserRouter } from 'react-router-dom';
import { CustomToast } from './components';
import { RouterApp } from './routes';
import { HeroUIProvider } from '@heroui/react';

export const App = () => (
	<BrowserRouter>
		<HeroUIProvider>
			<main className="dark text-foreground bg-background">
				<div className="h-screen">
					<RouterApp />
				</div>
				<CustomToast />
			</main>
		</HeroUIProvider>
	</BrowserRouter>
);
