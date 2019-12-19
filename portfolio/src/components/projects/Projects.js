import React from "react";
import { Row, Col } from "reactstrap";

const Projects = () => {
	return (
		<section className=" vh-100 bg-light">
			<Row id="projects" className="h-25">
				<Col className="text-center mt-5 pt-5 ">
					<h1 className="font-weight-normal">Projects</h1>
				</Col>
			</Row>
			<Row className="h-75 pb-3">
				<Col className="text-center mt-5 ">
					<Row className="h-100">
						<Col className="bg-white mx-3 shadow ">Left side</Col>
						<Col className="bg-white  mx-3 shadow">Right side</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

export default Projects;
