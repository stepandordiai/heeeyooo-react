import { Helmet } from "react-helmet";
import workData from "../../data/work-data.json";
import arrowIcon from "/icons/arrow-upper-right.png";
import "./Portfolio.scss";
import { useEffect, useState } from "react";

const Portfolio = () => {
	const [layout, setLayout] = useState("works__list");

	function handleLayout(props) {
		setLayout(props);
	}

	return (
		<>
			<Helmet>
				<title>Portfolio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/portfolio" />
			</Helmet>
			<h1>All works</h1>
			<div className="portfolio__btn-container">
				<button
					className={layout === "works__list" && "portfolio__btn--active"}
					onClick={() => handleLayout("works__list")}
				>
					List
				</button>
				<button
					className={layout === "works__grid" && "portfolio__btn--active"}
					onClick={() => handleLayout("works__grid")}
				>
					Grid
				</button>
			</div>
			{layout === "works__list" && (
				<div className={layout}>
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
			)}
			{layout === "works__grid" && (
				<div className={layout}>
					{workData.map((project) => {
						return (
							<a
								key={project.id}
								className="work__grid"
								href={project.siteUrl}
								target="_blank"
							>
								<img className="portfolio__img" src={project.img} alt="" />
								<div className="work__details-grid">
									<p className="work__name">{project.name}</p>
									<img width={20} height={20} src={arrowIcon} alt="" />
								</div>
							</a>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Portfolio;
