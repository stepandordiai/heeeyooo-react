import { NavLink } from "react-router-dom";
import logoImg from "/heeeyooo-studio-logo-black-v1.svg";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img
					width={40}
					height={40}
					className="header__logo-img"
					src={logoImg}
					alt="heeeyooo Logo"
				/>
				<NavLink className="header__logo-link" to={"/"}>
					heeeyooo <span>studio</span>
				</NavLink>
			</div>
			<nav className="header__nav">
				<NavLink className={"header__nav-link"}>Home</NavLink>
				<NavLink className={"header__nav-link"}>About</NavLink>
				<NavLink className={"header__nav-link"}>Portfolio</NavLink>
				<NavLink className={"header__nav-link"}>Contacts</NavLink>
			</nav>
		</header>
	);
};

export default Header;
