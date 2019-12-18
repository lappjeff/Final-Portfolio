import React from "react";
import { Container } from "reactstrap";
import { NavBar, About } from "./components";
function App() {
	return (
		<div className="App vh-100">
			<Container fluid className="h-100">
				<NavBar />
				<About />
			</Container>
		</div>
	);
}

export default App;
