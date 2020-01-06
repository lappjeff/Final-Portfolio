import React from "react";
import { Button, Nav, NavItem, Row, Col } from "reactstrap";
import SocialIcons from "./SocialIcons";
const NavBar = props => {
	const triggerMail = () => {
		window.open("mailto:lappjeff20@gmail.com");
	};
	return (
		<nav className="py-2 bg-white w-100 border-bottom shadow-sm ">
			<Row>
				<Col md={{ offset: 1, size: "auto" }}>Logo</Col>
				<Col md={{ offset: 9, size: "auto" }}>
					<SocialIcons />
				</Col>
			</Row>
		</nav>
	);
};

export default NavBar;
