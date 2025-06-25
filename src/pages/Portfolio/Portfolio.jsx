import { Helmet } from "react-helmet";
import workData from "../../data/work-data.json";
import arrowIcon from "/icons/arrow-upper-right.png";
import { useEffect, useState } from "react";
import "./Portfolio.scss";

const Portfolio = () => {
	const [layout, setLayout] = useState("works__list");

	function handleLayout(props) {
		setLayout(props);
	}

	useEffect(() => {
		const work = document.querySelectorAll(".work");
		let element = null;

		work.forEach((project, index) => {
			project.addEventListener("mousemove", (e) => {
				const projectRect = project.getBoundingClientRect();

				// Check if the element already exists
				if (!element) {
					// Create the img element on the first mousemove event
					element = document.createElement("img");
					element.classList.add("img-element");
					project.appendChild(element);
					element.src = workData[index].img;
				}

				// Update the image src only if the index changes or it's a new element
				if (element && element.src !== workData[index].img) {
					element.src = workData[index].img;
				}

				// Calculate mouse position relative to the project element
				let mouseX = e.clientX - projectRect.left;
				let mouseY = e.clientY - projectRect.top;

				// Move the element based on the mouse position
				if (element) {
					element.style.top = mouseY + "px";
					element.style.left = mouseX + "px";
				}
			});

			project.addEventListener("mouseleave", () => {
				if (element) {
					element.remove();
					element = null; // Reset element
				}
			});
		});
	});

	return (
		<>
			<Helmet>
				<title>Portfolio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/portfolio" />
			</Helmet>
			<h1>Portfolio</h1>
			<h2>All works</h2>
			<div className="portfolio__btn-container">
				<button
					className={layout === "works__list" && "portfolio__btn--active"}
					onClick={() => handleLayout("works__list")}
				>
					<span>List</span>
					<i class="fa-solid fa-bars"></i>
				</button>
				<button
					className={layout === "works__grid" && "portfolio__btn--active"}
					onClick={() => handleLayout("works__grid")}
				>
					<span>Grid</span>
					<i class="fa-solid fa-grip"></i>
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
								<div className="work__desc">
									<p className="work__name">{project.name}</p>
									<p
										className="work__date"
										style={{ fontWeight: 300, color: "rgba(255,255,255,0.5" }}
									>
										{project.date}
									</p>
									<p>Design & Development</p>
								</div>
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
