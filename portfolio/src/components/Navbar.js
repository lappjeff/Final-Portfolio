import React from "react";
import { Button, Nav, NavItem } from "reactstrap";
const NavBar = props => {
	return (
		<Nav fill className="py-2 sticky-top">
			<NavItem>
				<h3 className="m-0">Jeffrey M. Lapp</h3>
			</NavItem>
			<NavItem>
				<Button color="primary">Contact Me</Button>
			</NavItem>
		</Nav>
	);
};

export default NavBar;
