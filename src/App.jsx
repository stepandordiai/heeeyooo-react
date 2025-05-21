import Header from "./Components/Header/Header";
import workData from "./data/work-data.json";
import "./App.scss";

function App() {
	return (
		<>
			<Header />
			<p className="work__title">Work</p>
			<div className="work">
				{workData.map((project) => {
					return (
						<a
							key={project.id}
							className="work__project-card-link"
							href={project.siteUrl}
							target="_blank"
						>
							<img src={project.img} alt="" />
							<p className="work__project-card-name">{project.name}</p>
						</a>
					);
				})}
			</div>
		</>
	);
}

export default App;
