import React from "react";
import { Row, Col } from "reactstrap";

const Projects = () => {
	return (
		<Row id="projects" className="bg-white vh-100  align-items-center">
			<Col className="text-center">
				<h2>Projects</h2>
				<Row>
					<Col>Left side</Col>
					<Col>Right side</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Projects;
