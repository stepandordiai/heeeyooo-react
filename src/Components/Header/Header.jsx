import logoImg from "/heeeyooo-studio-logo-black-v1.svg";
import "./Header.scss";

const Header = () => {
	return (
		<header>
			<div className="header__logo">
				<img
					width={40}
					height={40}
					className="header__logo-img"
					src={logoImg}
					alt=""
				/>
				<a className="header__logo-link" href="">
					heeeyooo <span>studio</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
