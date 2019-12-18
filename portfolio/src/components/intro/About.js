import React from "react";
import { Row, Col, Button } from "reactstrap";
import ParticlesContainer from "./particles/ParticlesContainer";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
	return (
		<Row className="bg-light h-100 align-items-center ">
			<ParticlesContainer />

			<Col className="col-3 offset-md-1">
				<img
					src={require("../../assets/me.jpeg")}
					alt="Jeff with motorycycle"
					className="img-fluid rounded-circle"
				></img>
			</Col>
			<Col className="col-8">
				<header className="d-flex flex-column align-items-center bg-white  rounded py-3">
					<Col className="col-8">
						<h3 className="font-weight-light ">Full Stack Developer</h3>
						<h1 className="font-weight-light text-center text-white bg-dark rounded p-2 ">
							Clean code, reusable patterns
						</h1>
					</Col>

					<Col className="col-8 ">
						<h4 className="font-weight-light ">
							I'm a full-stack developer based out of central Pennsylvania. I
							strive to create clean, modern designs and API's using
							cutting-edge web technologies to enable a cleaner, more
							responsible web.
						</h4>
					</Col>
				</header>
			</Col>
			<Col className="text-center ">
				<a href="#projects">
					<Button color="info">
						<FontAwesomeIcon icon={faArrowDown} size="2x" />
					</Button>
				</a>
			</Col>
		</Row>
	);
};

export default About;
