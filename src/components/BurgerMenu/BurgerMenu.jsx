import { NavLink } from "react-router-dom";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
	document.querySelectorAll(".burger-menu__nav-link").forEach((link) => [
		link.addEventListener("click", () => {
			document.querySelector(".burger-1").classList.remove("burger-1--active");
			document.querySelector(".header").classList.remove("header--active");
			document
				.querySelector(".burger-menu")
				.classList.remove("burger-menu--active");
		}),
	]);

	const inactiveLink = "burger-menu__nav-link";
	const activeLink = "burger-menu__nav-link burger-menu__nav-link--active";

	return (
		<>
			<div className="burger-menu">
				<div className="burger-menu__nav">
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to={"/"}
					>
						Home
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
				</div>
			</div>
		</>
	);
};

export default BurgerMenu;
