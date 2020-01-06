import React from "react";
import { Container } from "reactstrap";
import { NavBar, About } from "./components";
function App() {
	return (
		<div className="App ">
			<NavBar />
			<Container fluid>
				<About />
			</Container>
		</div>
	);
}

export default App;
