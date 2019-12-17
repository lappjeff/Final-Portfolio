import React from "react";
import { Button, Col, Row } from "reactstrap";
const NavBar = props => {
	return (
		<Row className="mt-2 p-1  border-bottom">
			<Col className="text-center">
				<h2 className=" font-weight-light">Jeffrey M. Lapp</h2>
			</Col>
			<Col className="text-center">
				<Button color="primary">Contact</Button>
			</Col>
		</Row>
	);
};

export default NavBar;
