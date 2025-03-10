import React from "react";
import { GlobalStyle, lightTheme, darkTheme } from "./lib";
import { Button, Icon } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const isDarkTheme = true;
	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Button size="base" text="Primary" />
				<Button appearance="secondary" size="base" text="Secondary" />
				<Button appearance="onDark" size="base" text="onDark" />
				<Button appearance="onLight" size="base" text="onLight" />
				<Button appearance="inverted" size="base" text="Inverted" />
			</main>
		</ThemeProvider>
	);
}

export default App;
