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

	return (
		<>
			<div className="burger-menu">
				<div className="burger-menu__nav">
					<NavLink className={"burger-menu__nav-link"} to={"/"}>
						Home
					</NavLink>
					<NavLink className={"burger-menu__nav-link"} to={"/about"}>
						About
					</NavLink>
					<NavLink className={"burger-menu__nav-link"} to={"/portfolio"}>
						Portfolio
					</NavLink>
					<NavLink className={"burger-menu__nav-link"} to={"/contacts"}>
						Contacts
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default BurgerMenu;
