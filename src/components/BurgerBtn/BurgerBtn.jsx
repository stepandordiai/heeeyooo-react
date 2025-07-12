import { useEffect } from "react";
import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurger1() {
		document.querySelector(".header").classList.toggle("header--active");
		document
			.querySelector(".burger-menu")
			.classList.toggle("burger-menu--active");
		document.querySelector(".burger-1").classList.toggle("burger-1--active");
		const headerNavLink = document.querySelectorAll(".burger-menu__nav-link");

		const start = 50;
		headerNavLink.forEach((link, index) => {
			setTimeout(() => {
				link.classList.toggle("burger-menu__nav-link--show");
			}, start + 50 * index);
		});
	}

	useEffect(() => {
		document.addEventListener("scroll", () => {
			document.querySelector(".burger-1").classList.remove("burger-1--active");
			document.querySelector(".header").classList.remove("header--active");
			document
				.querySelector(".burger-menu")
				.classList.remove("burger-menu--active");
			// const headerNavLink = document.querySelectorAll(".burger-menu__nav-link");

			// const start = 50;
			// headerNavLink.forEach((link, index) => {
			// 	setTimeout(() => {
			// 		link.classList.remove("burger-menu__nav-link--show");
			// 	}, start + 50 * index);
			// });
		});
	}, []);

	return (
		<div onClick={toggleBurger1} className="burger-btn__container">
			<div className="burger-1"></div>
		</div>
	);
};

export default BurgerBtn;
