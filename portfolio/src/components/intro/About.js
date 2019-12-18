import React from "react";
import { Row, Col } from "reactstrap";
const About = () => {
	return (
		<Row className="bg-light pt-5">
			<Col className="col-2">
				<img
					src={require("../../assets/me.jpeg")}
					alt="Jeff with motorycycle"
					className="img-fluid rounded-circle"
				></img>
			</Col>
			<Col>
				<header className="d-flex flex-column align-items-center">
					<h2 className="font-weight-light ">Full Stack Developer</h2>
					<h1 className="font-weight-normal ">Clean code, reusable patterns</h1>
					<Col className="col-8 ">
						<h4 className="font-weight-normal ">
							I'm a full-stack developer based out of central Pennsylvania. I
							strive to create clean, modern designs and API's using
							cutting-edge technologies to enable a cleaner, more responsible
							web.
						</h4>
					</Col>
				</header>
			</Col>
		</Row>
	);
};

export default About;
