import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder } from "./lib/placeholder";
import { Spinner } from "./lib";

function App() {
	const switcher = false;
	return (
		<>
			<GlobalStyle />
			<main>
				<Spinner size="base" />
				<Placeholder text="Привет 5-й поток!" />
			</main>
		</>
	);
}

export default App;
