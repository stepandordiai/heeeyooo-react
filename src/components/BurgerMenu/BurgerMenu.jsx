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
			const headerNavLink = document.querySelectorAll(".burger-menu__nav-link");

			const start = 50;
			headerNavLink.forEach((link, index) => {
				setTimeout(() => {
					link.classList.remove("burger-menu__nav-link--show");
				}, start + 50 * index);
			});
		}),
	]);

	const inactiveLink = "burger-menu__nav-link";
	const activeLink = "burger-menu__nav-link burger-menu__nav-link--active";

	return (
		<>
			<div className="burger-menu">
				<nav className="burger-menu__nav">
					<div className="burger-menu__nav-item">
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							to={"/"}
						>
							Home
						</NavLink>
					</div>
					<div className="burger-menu__nav-item">
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							to={"/about"}
						>
							About
						</NavLink>
					</div>
					<div className="burger-menu__nav-item">
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							to={"/portfolio"}
						>
							Portfolio
						</NavLink>
					</div>
					<div className="burger-menu__nav-item">
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							to={"/contacts"}
						>
							Contacts
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
};

export default BurgerMenu;
