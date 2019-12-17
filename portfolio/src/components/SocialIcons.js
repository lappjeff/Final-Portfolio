import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = props => {
	return (
		<div>
			<FontAwesomeIcon icon={faGithub} />
			<FontAwesomeIcon icon={faLinkedin} />
		</div>
	);
};

export default SocialIcons;
