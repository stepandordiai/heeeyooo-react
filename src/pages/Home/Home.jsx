import { Helmet } from "react-helmet";
import "./Home.scss";
import workData from "./../../data/work-data.json";
import { useEffect } from "react";

const Home = () => {
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
				<title>heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/" />
			</Helmet>
			<div className="home">
				<h1>Creative web studio</h1>
			</div>
			<h2>Work</h2>
			<div className="home__works">
				{workData
					.filter((project) => project.isStarred)
					.map((project) => {
						return (
							<a
								key={project.id}
								className="home__work rect-animate"
								href={project.siteUrl}
								target="_blank"
							>
								<img className="home__work-img" src={project.img} alt="" />
								<div className="home__work-details">
									<img
										className="home__work-icon"
										width={24}
										height={24}
										src={project.icon}
										alt=""
									/>
									<p className="home__work-name">{project.name}</p>
									<p className="home__work-date">{project.date}</p>
								</div>
							</a>
						);
					})}
			</div>
		</>
	);
};

export default Home;
