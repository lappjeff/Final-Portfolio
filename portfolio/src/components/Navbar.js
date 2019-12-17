import React from "react";
import { Button, Col, Row } from "reactstrap";
const NavBar = props => {
	return (
		<Row className="mt-2 py-1  border-bottom align-items-center shadow-sm ">
			<Col className="text-center">
				<h3 className=" font-weight-normal m-0">Jeffrey M. Lapp</h3>
			</Col>
			<Col className="text-center">
				<Button color="primary">Contact</Button>
			</Col>
		</Row>
	);
};

export default NavBar;
