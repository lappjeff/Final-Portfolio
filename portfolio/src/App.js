import React from "react";
import { Container } from "reactstrap";
import { NavBar, About } from "./components";
function App() {
	return (
		<div className="App">
			<Container fluid>
				<NavBar />
				<About />
			</Container>
		</div>
	);
}

export default App;
