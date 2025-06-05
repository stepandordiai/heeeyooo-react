import { Helmet } from "react-helmet";
import workData from "../../data/work-data.json";
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
						<div key={project.id} className="work">
							<img className="work__img" src={project.img} alt="" />
							<div className="work__details">
								<img
									width={24}
									height={24}
									className="work__icon"
									src={project.icon}
									alt=""
								/>
								<p className="work__name">{project.name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Portfolio;
