import { Helmet } from "react-helmet";
import workData from "../../data/work-data.json";
import { useEffect } from "react";
import "./Portfolio.scss";

const Portfolio = () => {
	function isTouchDevice() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (error) {
			return false;
		}
	}

	// TODO: I learned new nice animation with position and scale
	useEffect(() => {
		const portfolio = document.querySelectorAll(".rect-animate");

		portfolio.forEach((creatorLink, index) => {
			const bgElement = document.createElement("div");

			creatorLink.appendChild(bgElement);

			bgElement.classList.add("bg-element");

			let mouseX;
			let mouseY;

			creatorLink.addEventListener("mouseover", (e) => {
				const rect = creatorLink.getBoundingClientRect();
				mouseX =
					(!isTouchDevice() ? e.clientX : e.touches[0].clientX) - rect.left;
				mouseY =
					(!isTouchDevice() ? e.clientY : e.touches[0].clientY) - rect.top;
				bgElement.style.top = mouseY + "px";
				bgElement.style.left = mouseX + "px";
				bgElement.classList.add("bg-element--active");
			});

			creatorLink.addEventListener("touchstart", (e) => {
				const rect = creatorLink.getBoundingClientRect();
				mouseX =
					(!isTouchDevice() ? e.clientX : e.touches[0].clientX) - rect.left;
				mouseY =
					(!isTouchDevice() ? e.clientY : e.touches[0].clientY) - rect.top;
				bgElement.style.top = mouseY + "px";
				bgElement.style.left = mouseX + "px";
				bgElement.classList.add("bg-element--active");
			});

			creatorLink.addEventListener("mouseleave", () => {
				// const bgElement = document.querySelector(".bg-element");
				bgElement.classList.remove("bg-element--active");
			});

			creatorLink.addEventListener("touchend", () => {
				// const bgElement = document.querySelector(".bg-element");
				bgElement.classList.remove("bg-element--active");
			});
		});
	});
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
							className="work rect-animate"
							href={project.siteUrl}
							target="_blank"
						>
							<img className="work__img" src={project.img} alt="" />
							<div className="work__details">
								<p className="work__name">{project.name}</p>
							</div>
							{/* <div className="bg-element"></div> */}
						</a>
					);
				})}
			</div>
		</>
	);
};

export default Portfolio;
