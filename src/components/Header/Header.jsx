import { NavLink } from "react-router-dom";
import logoImg from "/heeeyooo-studio-logo-black-v1.svg";
import "./Header.scss";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = () => {
	useEffect(() => {
		window.addEventListener("resize", () => {
			const screenSizeElement = document.createElement("div");

			Object.assign(screenSizeElement.style, {
				position: "fixed",
				bottom: "0",
				left: "0",
				background: "rgba(255, 255, 255, 0.5)",
				webkitBackdropFilter: "blur(25px)",
				backdropFilter: "blur(25px)",
				width: "150px",
				height: "100px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: "2rem",
			});

			screenSizeElement.textContent = window.innerWidth;
			document.body.append(screenSizeElement);
			setTimeout(() => {
				screenSizeElement.remove();
			}, 3000);
		});

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
			<span>Home</span>
			<nav className="header__nav">
				<NavLink className={"header__nav-link"}>Home</NavLink>
				<NavLink className={"header__nav-link"}>About</NavLink>
				<NavLink className={"header__nav-link"}>Portfolio</NavLink>
				<NavLink className={"header__nav-link"}>Contacts</NavLink>
			</nav>
			<BurgerBtn />
		</header>
	);
};

export default Header;
