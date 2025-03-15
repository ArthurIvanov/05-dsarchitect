import React from "react";
import {
	GlobalStyle,
	lightTheme,
	darkTheme,
	Badge,
	Card,
	ExtendedCard,
	Icon,
} from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const isDarkTheme = false;
	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Card />
				{/* <ExtendedCard
					text="Hello text prop"
					textSize="base"
					buttonText="More info"
					contentRight={[
						<Badge text="Hello" size="small" />,
						<Icon iconName="user" size={20} />,
					]}
				>
					COMPLEX COMPOSITION
				</ExtendedCard> */}
			</main>
		</ThemeProvider>
	);
}

export default App;
