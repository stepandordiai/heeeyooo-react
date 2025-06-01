import { Helmet } from "react-helmet";
import workData from "./../../data/work-data.json";
import "./Portfolio.scss";

const Portfolio = () => {
	return (
		<>
			<Helmet>
				<title>Portfolio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/portfolio" />
			</Helmet>
			<h1>Portfolio</h1>
			<div className="work">
				{workData.map((project) => {
					return (
						<a
							key={project.id}
							className="work__project-card-link"
							href={project.siteUrl}
							target="_blank"
						>
							<img src={project.img} alt="" />
							<p className="work__project-card-name">{project.name}</p>
						</a>
					);
				})}
			</div>
		</>
	);
};

export default Portfolio;
