import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logoImg from "/heeeyooo-studio-logo-white-v1.svg";
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

	const inactiveLink = "header__nav-link";
	const activeLink = "header__nav-link header__nav-link--active";

	return (
		<header className="header">
			<div className="header__inner">
				<NavLink className="header__logo-link" to={"/"}>
					<img
						width={35}
						height={35}
						className="header__logo-img"
						src={logoImg}
						alt="heeeyooo Logo"
					/>
					{/* <p className="header__logo-title">
						heeeyooo <span>studio</span>
					</p> */}
				</NavLink>
				<span className="header__active-page">{getPageTitle()}</span>
				<nav className="header__nav">
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={"/"}
					>
						<span>Home</span>
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={"/about"}
					>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={"/portfolio"}
					>
						Portfolio
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={"/contacts"}
					>
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
