import React from "react";
import { NavLink } from "reactstrap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = props => {
	return (
		<div className="d-flex justify-content-end align-items-end h-100">
			<NavLink href="https://github.com/lappjeff " className="py-0">
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</NavLink>
			<NavLink
				href="https://www.linkedin.com/in/jeffrey-lapp-622298181/"
				className="py-0"
			>
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
			</NavLink>
		</div>
	);
};

export default SocialIcons;
