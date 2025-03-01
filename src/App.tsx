import React from "react";
import { GlobalStyle } from "./lib/theme";
import { Placeholder } from "./lib/placeholder";

function App() {
	const switcher = false;
	return (
		<>
			<GlobalStyle />
			<main>
				<Placeholder text="Привет 5-й поток!" />
			</main>
		</>
	);
}

export default App;
