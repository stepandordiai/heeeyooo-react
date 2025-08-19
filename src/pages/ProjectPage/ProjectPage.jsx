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
		const wrappers = document.querySelectorAll(".wrr");

		const wrappersImg = document.querySelectorAll(".project-page__img-wrapper");

		wrappers.forEach((wrapper, index) => {
			// if (!wrapper) return;

			// reset animation
			// wrapper.style.animation = "none";

			// force reflow to restart animation
			// eslint-disable-next-line no-unused-expressions
			// wrapper.offsetHeight;
			const wrapperRect = wrapper.getBoundingClientRect();

			document.addEventListener("scroll", () => {
				const wrapperRect = wrapper.getBoundingClientRect();
				if (wrapperRect.top < window.innerHeight - wrapperRect.top / 2) {
					// apply animation again
					wrappersImg[index].classList.add("project-page__img-wrapper--active");
				}
			});

			if (wrapperRect.top < window.innerHeight - wrapperRect.top / 2) {
				// apply animation again
				wrappersImg[index].classList.add("project-page__img-wrapper--active");
			}
		});
	}, []); // run every time pathname changes
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
