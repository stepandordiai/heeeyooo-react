import { Helmet } from "react-helmet";
import "./About.scss";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/about" />
			</Helmet>
			<h1>About</h1>
			<p className="construction">This page is under construction</p>
		</>
	);
};

export default About;
