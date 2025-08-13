import { Helmet } from "react-helmet";
import arrowIcon from "/icons/arrow-upper-right.png";
import { useEffect, useState } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Work.scss";

const Work = ({ workData }) => {
	const { lng } = useParams();

	const [layout, setLayout] = useState("works__list");

	function handleLayout(props) {
		setLayout(props);
	}

	useEffect(() => {
		const work = document.querySelectorAll(".project");
		let element = null;

		work.forEach((project, index) => {
			project.addEventListener("mousemove", (e) => {
				// Check for touch device
				if (isTouchDevice()) return;
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

		if (layout === "works__list") {
			const works = document.querySelectorAll(".work");
			let time = 75;
			works.forEach((work, index) => {
				document.addEventListener("scroll", () => {
					const workRect = work.getBoundingClientRect();
					if (workRect.top < window.innerHeight) {
						// setTimeout(() => {
						work.classList.add(`work--active`);
						// }, time + 75 * index);
					}
				});
				const workRect = work.getBoundingClientRect();
				if (workRect.top < window.innerHeight) {
					setTimeout(() => {
						work.classList.add(`work--active`);
					}, time + 75 * index);
				}
			});
		}

		if (layout === "works__grid") {
			const works = document.querySelectorAll(".work__grid");
			let time = 75;
			works.forEach((work, index) => {
				document.addEventListener("scroll", () => {
					const workRect = work.getBoundingClientRect();
					if (workRect.top < window.innerHeight) {
						work.classList.add(`work--active`);
					}
				});
				const workRect = work.getBoundingClientRect();
				if (workRect.top < window.innerHeight) {
					setTimeout(() => {
						work.classList.add(`work--active`);
					}, time + 75 * index);
				}
			});
		}
	}, [layout]);

	return (
		<>
			<Helmet>
				<title>Portfolio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/portfolio" />
			</Helmet>
			<main className="work">
				<h1 className="work__title">Work</h1>
				<div>
					<p className="work__sec-title">
						All works <span>{workData.length}</span>
					</p>
				</div>
				<div className="portfolio__btn-container">
					<button
						className={
							layout === "works__list"
								? "portfolio__btn portfolio__btn--active"
								: "portfolio__btn"
						}
						onClick={() => handleLayout("works__list")}
					>
						<span>List</span>
					</button>
					<button
						className={
							layout === "works__grid"
								? "portfolio__btn portfolio__btn--active"
								: "portfolio__btn"
						}
						onClick={() => handleLayout("works__grid")}
					>
						<span>Grid</span>
					</button>
				</div>
				{layout === "works__list" && (
					<div className={layout}>
						{workData.map((project) => {
							return (
								<NavLink
									key={project.id}
									className="project"
									to={`/${lng}/project-page/${project.id}`}
									// href={project.siteUrl}
									// target="_blank"
								>
									<p className="work__name">{project.name}</p>
									<div className="work__desc">
										<p
											className="work__date"
											style={{ fontWeight: 300, color: "rgba(255,255,255,0.5" }}
										>
											{project.date}
										</p>
										<p>Design & Development</p>
									</div>
								</NavLink>
							);
						})}
					</div>
				)}
				{layout === "works__grid" && (
					<div className={layout}>
						{workData.map((project) => {
							return (
								<NavLink
									key={project.id}
									className="work__grid"
									to={`/${lng}/project-page/${project.id}`}
									// href={project.siteUrl}
									// target="_blank"
								>
									<img className="portfolio__img" src={project.img} alt="" />
									<div className="work__details-grid">
										<p className="work__name">{project.name}</p>
										<img width={20} height={20} src={arrowIcon} alt="" />
									</div>
								</NavLink>
							);
						})}
					</div>
				)}
			</main>
		</>
	);
};

export default Work;
