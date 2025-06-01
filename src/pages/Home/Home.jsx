import { Helmet } from "react-helmet";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/" />
			</Helmet>
			<h1>heeeyooo studio</h1>
			<p className="construction">This page is under construction</p>
		</>
	);
};

export default Home;
