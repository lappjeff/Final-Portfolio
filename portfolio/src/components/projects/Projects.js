import React from "react";
import { Row, Col } from "reactstrap";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
	return (
		<Row id="projects">
			<Col>
				<ProjectsCarousel />
			</Col>
		</Row>
	);
};

export default Projects;
