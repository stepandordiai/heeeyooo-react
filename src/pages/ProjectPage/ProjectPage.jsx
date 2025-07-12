import "./ProjectPage.scss";
import workData from "./../../data/work-data.json";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
	const { id } = useParams();

	console.log;

	const project = workData.find((project) => project.id === id);

	return (
		<>
			<main className="project-page">
				<span style={{ color: "rgba(255, 255, 255, 0.5)" }}>Project</span>
				<img src={project.img} alt="" />
			</main>
		</>
	);
};

export default ProjectPage;
