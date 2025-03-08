import React from "react";
import { GlobalStyle, lightTheme, darkTheme } from "./lib";
import { Button, Icon } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const isDarkTheme = false;
	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Button size="base" iconBefore="chevronDown" text="Привет!" />
				<Button appearance="secondary" size="small" disabled />
			</main>
		</ThemeProvider>
	);
}

export default App;
