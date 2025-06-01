import { NavLink } from "react-router-dom";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
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
