import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
	{ src: require("../../assets/me.jpeg"), altText: "Slide 1" },
	{ src: require("../../assets/me.jpeg"), altText: "Slide 1" },
	{ src: require("../../assets/me.jpeg"), altText: "Slide 1" }
];

const ProjectsCarousel = () => {
	return <UncontrolledCarousel items={items} />;
};

export default ProjectsCarousel;
