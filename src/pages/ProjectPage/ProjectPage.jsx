import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ProjectPage.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProjectPage = ({ workData }) => {
	const { id, lng } = useParams();

	const { pathname } = useLocation();

	const project = workData.find((project) => project.id === id);

	const currentProjectIndex = workData.indexOf(project);

	const nexProjectIndex =
		currentProjectIndex < workData.length - 1 ? currentProjectIndex + 1 : 0;

	useEffect(() => {
		const wrappers = Array.from(document.querySelectorAll(".wrr"));
		const wrappersImg = Array.from(
			document.querySelectorAll(".project-page__img-wrapper")
		);

		// 1. Remove all classes when navigating
		wrappersImg.forEach((img) =>
			img.classList.remove("project-page__img-wrapper--active")
		);

		// 2. Scroll handler
		const handleScroll = () => {
			wrappers.forEach((wrapper, index) => {
				const rect = wrapper.getBoundingClientRect();
				if (rect.top < window.innerHeight) {
					wrappersImg[index].classList.add("project-page__img-wrapper--active");
				}
			});
		};

		// 3. Run once immediately (in case some elements are already in view)
		// handleScroll();

		// setTimeout(() => {
		handleScroll();
		// }, 500);

		// 4. Attach listener
		window.addEventListener("scroll", handleScroll, { passive: true });

		// 5. Cleanup on unmount / navigation
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [pathname]);
	return (
		<>
			<Helmet>
				<title>{project.name} &bull; heeeyooo studio</title>
			</Helmet>
			<main className="project-page">
				<div style={{ marginBottom: 20 }}>
					<NavLink className="page-nav__link" to={`/${lng}/work`}>
						All work
					</NavLink>{" "}
					&bull; <span style={{ color: "hsl(0, 0%, 50%)" }}>Project</span>
				</div>
				<h2 className="project-page__title">{project.name}</h2>
				<div className="img-flex">
					{project.img.map((img, index) => {
						return (
							<div className="wrr">
								<div key={index} className="project-page__img-wrapper">
									<img
										className="project-page__img"
										src={img}
										alt=""
										loading="lazy"
									/>
								</div>
							</div>
						);
					})}
				</div>

				<a href={project.siteUrl} target="_blank">
					Live site
				</a>
				<NavLink to={`/${lng}/project-page/${workData[nexProjectIndex].id}`}>
					Next Project
				</NavLink>
			</main>
		</>
	);
};

export default ProjectPage;
