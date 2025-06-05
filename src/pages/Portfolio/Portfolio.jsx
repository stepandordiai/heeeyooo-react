import { Helmet } from "react-helmet";
import workData from "../../data/work-data.json";
import arrowIcon from "/icons/arrow-upper-right.png";
import "./Portfolio.scss";

const Portfolio = () => {
	return (
		<>
			<Helmet>
				<title>Portfolio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/portfolio" />
			</Helmet>
			<h1>All works</h1>
			<div className="works">
				{workData.map((project) => {
					return (
						<a
							key={project.id}
							className="work"
							href={project.siteUrl}
							target="_blank"
						>
							<p className="work__name">{project.name}</p>
							<img width={20} height={20} src={arrowIcon} alt="" />
						</a>
					);
				})}
			</div>
		</>
	);
};

export default Portfolio;
