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
				bgElement.classList.remove("bg-element--active");
			});

			creatorLink.addEventListener("touchend", () => {
				bgElement.classList.remove("bg-element--active");
			});
		});
	});

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollTop = document.documentElement.scrollTop;
			const documentHeight = document.documentElement.scrollHeight;
			const windowHeight = document.documentElement.clientHeight;
			const calcHeight = documentHeight - windowHeight;

			const percentagePos = Math.min((scrollTop * 100) / calcHeight, 100);

			if (scrollTop > windowHeight) {
				document
					.querySelector(".scroll-line")
					.classList.add("scroll-line--active");
			} else {
				document
					.querySelector(".scroll-line")
					.classList.remove("scroll-line--active");
			}

			document.querySelector(
				".scroll-line-inner"
			).style.height = `${percentagePos}%`;
		});
	}, []);

	function handleScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	return (
		<>
			<Helmet>
				<title>Creative web studio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/" />
			</Helmet>
			<div className="home">
				<h1 className="home__title">Creative web studio</h1>
				<h2 className="home__sec-title" style={{ color: "hsl(0,0%,50%)" }}>
					Digital and Graphic Design Studio
					<br />
					based in Copenhagen.
					<br />
					Crafting Visual Personalities
					<br />
					and Digital Experiences.
				</h2>
			</div>
			<h2 style={{ marginTop: 100 }}>Recent work</h2>
			<p style={{ color: "hsl(0, 0%, 50%)" }}>
				A selection of past and ongoing projects. Some wer built for clients,
				others for ourselves - from early experiments to full-scale systems, our
				work spans disciplines and formats.
			</p>
			<div className="home__works">
				{workData.slice(0, 6).map((project) => {
					return (
						<a
							key={project.id}
							className="home__work rect-animate"
							href={project.siteUrl}
							target="_blank"
						>
							<img className="home__work-img" src={project.img} alt="" />
							<div className="home__work-details">
								<p className="home__work-name">{project.name}</p>
								<p className="home__work-date">{project.date}</p>
							</div>
						</a>
					);
				})}
			</div>
			<h2 style={{ marginTop: 100, fontSize: "1.5rem", fontWeight: 500 }}>
				Services
			</h2>
			<p>
				We specialize in crafting websites from idea, through design to
				development and post-deployment follow-up support.
			</p>
			<div className="home__services-grid">
				<div className="home__service">
					<p>Strategy</p>
				</div>
				<div className="home__service">
					<p>Design</p>
				</div>
				<div className="home__service">
					<p>Hosting</p>
				</div>
				<div className="home__service">
					<p>Development</p>
				</div>
				<div className="home__service">
					<p>Website Maintenance</p>
				</div>
				<div className="home__service">
					<p>SEO</p>
				</div>
			</div>
			<h2 style={{ textAlign: "center" }}>Technologies</h2>
			<div className="technologies">
				<p>Next.js</p>
				<p>Bootstrap</p>
				<p>React</p>
				<p>Sass</p>
				<p>CSS</p>
				<p>HTML</p>
				<p>Node.js</p>
				<p>Express.js</p>
				<p>TypeScript</p>
				<p>JavaScript</p>
				<p>Python</p>
				<p>MongoDB</p>
				<p>Figma</p>
				<p>GitHub</p>
				<p>Git</p>
			</div>
			<h2>Our process</h2>
			<p>Efficient, Transparent, and Custom-Tailored</p>
			<p>
				We follow a streamlined process to ensure your app is developed
				efficiently and meets the highest standards.
			</p>
			<div>
				<div>
					<p>1</p>
					<p>Consultation</p>
					<p>
						We begin by understanding your business needs and goals for your
						app.
					</p>
				</div>
				<div>
					<p>2</p>
					<p>Design</p>
					<p>
						Our team designs a user-friendly interface that offers an engaging
						experience on all devices.
					</p>
				</div>
				<div>
					<p>3</p>
					<p>Development</p>
					<p>
						We build your app using cutting-edge technologies for optimal
						performance across all browsers and devices.
					</p>
				</div>
				<div>
					<p>4</p>
					<p>Launch</p>
					<p>
						We successfully launch your app and provide ongoing support to
						ensure long-term success.
					</p>
				</div>
			</div>
			<div onClick={handleScrollToTop} className="scroll-line">
				<div className="scroll-line-inner"></div>
			</div>
		</>
	);
};

export default Home;
