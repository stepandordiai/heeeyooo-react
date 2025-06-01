import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logoImg from "/heeeyooo-studio-logo-black-v1.svg";
import "./Header.scss";

const Header = () => {
	const { pathname } = useLocation();

	function getPageTitle() {
		switch (pathname) {
			case "/":
				return "Home";
			case "/about":
				return "About";
			case "/portfolio":
				return "Portfolio";
			case "/contacts":
				return "Contacts";
			default:
				return "";
		}
	}

	useEffect(() => {
		// window.addEventListener("resize", () => {
		// 	const screenSizeElement = document.createElement("div");

		// 	Object.assign(screenSizeElement.style, {
		// 		position: "fixed",
		// 		bottom: "0",
		// 		left: "0",
		// 		background: "rgba(255, 255, 255, 0.5)",
		// 		webkitBackdropFilter: "blur(25px)",
		// 		backdropFilter: "blur(25px)",
		// 		width: "150px",
		// 		height: "100px",
		// 		display: "flex",
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 		fontSize: "2rem",
		// 	});

		// 	screenSizeElement.textContent = window.innerWidth;
		// 	document.body.append(screenSizeElement);
		// 	setTimeout(() => {
		// 		screenSizeElement.remove();
		// 	}, 3000);
		// });

		let prevScroll = 0;
		function handleHeaderOnScroll() {
			const scroll = document.documentElement.scrollTop;
			if (scroll > prevScroll) {
				document.querySelector(".header").classList.add("header--hide");
			} else {
				document.querySelector(".header").classList.remove("header--hide");
			}
			prevScroll = scroll;
		}
		document.addEventListener("scroll", handleHeaderOnScroll);

		return () => {
			document.removeEventListener("scroll", handleHeaderOnScroll);
		};
	}, []);

	return (
		<header className="header">
			<div className="header__inner">
				<NavLink className="header__logo-link" to={"/"}>
					<img
						width={40}
						height={40}
						className="header__logo-img"
						src={logoImg}
						alt="heeeyooo Logo"
					/>
					<p className="header__logo-title">
						heeeyooo <span>studio</span>
					</p>
				</NavLink>
				<span className="header__active-page">{getPageTitle()}</span>
				<nav className="header__nav">
					<NavLink className={"header__nav-link"} to={"/"}>
						Home
					</NavLink>
					<NavLink className={"header__nav-link"} to={"/about"}>
						About
					</NavLink>
					<NavLink className={"header__nav-link"} to={"/portfolio"}>
						Portfolio
					</NavLink>
					<NavLink className={"header__nav-link"} to={"/contacts"}>
						Contacts
					</NavLink>
				</nav>
				<BurgerBtn />
			</div>
			<BurgerMenu />
		</header>
	);
};

export default Header;
