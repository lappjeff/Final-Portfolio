import React from "react";
import { Button, Nav, NavItem } from "reactstrap";
import SocialIcons from "./SocialIcons";
const NavBar = props => {
	return (
		<nav>
			<Nav fill className="py-2 sticky-top border-bottom shadow-sm ">
				<NavItem>
					<h3 className="m-0">Jeffrey M. Lapp</h3>
				</NavItem>
				<NavItem>
					<SocialIcons />
				</NavItem>
				<NavItem>
					<Button color="primary">Contact Me</Button>
				</NavItem>
			</Nav>
		</nav>
	);
};

export default NavBar;
