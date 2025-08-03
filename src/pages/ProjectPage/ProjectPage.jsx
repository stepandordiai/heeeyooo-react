import "./ProjectPage.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProjectPage = ({ workData }) => {
	const { id, lng } = useParams();

	const project = workData.find((project) => project.id === id);

	const currentProjectIndex = workData.indexOf(project);

	const nexProjectIndex =
		currentProjectIndex < workData.length - 1 ? currentProjectIndex + 1 : 0;
	return (
		<>
			<main className="project-page">
				<h1 style={{ color: "hsl(0, 0%, 50%)" }}>Project</h1>
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
