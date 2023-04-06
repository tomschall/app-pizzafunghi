import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { Session } from 'next-auth';
import ErrorBoundary from '../components/ErrorBoundary';

import { ThemeContextProvider } from '../context/useTheme';
import { ActiveTabContextProvider } from '../context/useActiveTab';
import { FolloweeContextProvider } from '../context/useFollowee';

import '../styles/globals.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" type="image/svg+xml" href="./favicon.svg" />
				<link rel="icon" type="image/png" href="./favicon.png" />
			</Head>
			<SessionProvider session={session}>
				<ErrorBoundary>
					<ThemeContextProvider>
						<FolloweeContextProvider>
							<ActiveTabContextProvider>
								<Component {...pageProps} />
							</ActiveTabContextProvider>
						</FolloweeContextProvider>
					</ThemeContextProvider>
				</ErrorBoundary>
			</SessionProvider>
		</>
	);
}
