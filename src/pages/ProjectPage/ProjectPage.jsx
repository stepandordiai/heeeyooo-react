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
		// TODO:
		const wrapper = document.querySelector(".project-page__img-wrapper");
		if (!wrapper) return;

		// reset animation
		wrapper.style.animation = "none";

		// force reflow to restart animation
		// eslint-disable-next-line no-unused-expressions
		wrapper.offsetHeight;

		// apply animation again
		wrapper.style.animation =
			"revealWrapper 2s forwards cubic-bezier(0.75, 0.5, 0.25, 1)";
	}, [pathname]); // run every time pathname changes
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
				<div className="project-page__img-wrapper">
					<img className="project-page__img" src={project.img} alt="" />
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
