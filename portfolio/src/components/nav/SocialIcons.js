import React from "react";
import { Button } from "reactstrap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = props => {
	return (
		<div className="d-flex  ">
			<a
				href="https://github.com/lappjeff "
				target="_blank"
				rel="noopener noreferrer"
				className="py-0"
			>
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>
			<a
				href="https://www.linkedin.com/in/jeffrey-lapp-622298181/"
				className="py-0"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
			</a>
		</div>
	);
};

export default SocialIcons;
