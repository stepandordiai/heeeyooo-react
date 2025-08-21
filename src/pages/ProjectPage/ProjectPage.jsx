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

	// useEffect(() => {
	// 	const wrappers = document.querySelectorAll(".wrr");
	// 	const wrappersImg = document.querySelectorAll(".project-page__img-wrapper");

	// 	wrappersImg.forEach((img) =>
	// 		img.classList.remove("project-page__img-wrapper--active")
	// 	);

	// 	const handleScroll = () => {
	// 		wrappers.forEach((wrapper, index) => {
	// 			const rect = wrapper.getBoundingClientRect();

	// 			if (rect.top < window.innerHeight) {
	// 				wrappersImg[index].classList.add("project-page__img-wrapper--active");
	// 			}
	// 		});
	// 	};

	// 	setTimeout(() => {
	// 		handleScroll();
	// 	}, 50);

	// 	setTimeout(() => {
	// 		window.addEventListener("scroll", handleScroll, { passive: true });
	// 	}, 50);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, [pathname]);

	useEffect(() => {
		// const wrappers = document.querySelectorAll(".project-page__img-wrapper");
		const wrappersImg = document.querySelectorAll(".project-page__img");

		// remove all classes initially
		wrappersImg.forEach((img) =>
			img.classList.remove("project-page__img-wrapper--active")
		);

		// TODO:
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target;

						img.classList.add("project-page__img-wrapper--active");
					}
				});
			},
			// if part of element is in view it fires immediately
			{
				threshold: 0,
			}
		);

		// observe each wrapper image
		wrappersImg.forEach((img) => observer.observe(img));

		return () => {
			// cleanup observer
			wrappersImg.forEach((img) => observer.unobserve(img));
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
							<img
								key={index}
								className="project-page__img"
								src={img}
								alt={project.name}
								loading="lazy"
							/>
						);
					})}
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<a
						className="project-page__link"
						href={project.siteUrl}
						target="_blank"
					>
						Live site
					</a>
					<NavLink
						className="project-page__link"
						to={`/${lng}/project-page/${workData[nexProjectIndex].id}`}
					>
						Next Project
					</NavLink>
				</div>
			</main>
		</>
	);
};

export default ProjectPage;
