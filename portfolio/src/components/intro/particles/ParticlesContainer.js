import React from "react";
import { params } from "./particlesConfig";
import Particles from "react-particles-js";
const ParticlesContainer = () => {
	return <Particles style={{ position: "fixed", top: 0 }} params={params} />;
};

export default ParticlesContainer;
