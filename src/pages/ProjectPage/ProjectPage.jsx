import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = ({ workData }) => {
	const { id, lng } = useParams();

	const project = workData.find((project) => project.id === id);

	const currentProjectIndex = workData.indexOf(project);

	const nexProjectIndex =
		currentProjectIndex < workData.length - 1 ? currentProjectIndex + 1 : 0;
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
				<img className="project-page__img" src={project.img} alt="" />
				<a href={project.siteUrl}>Live site</a>
				<NavLink to={`/${lng}/project-page/${workData[nexProjectIndex].id}`}>
					Next Project
				</NavLink>
			</main>
		</>
	);
};

export default ProjectPage;
