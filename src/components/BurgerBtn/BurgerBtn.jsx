import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurger1() {
		document.querySelector(".burger-1").classList.toggle("burger-1--active");
	}
	return (
		<>
			<div onClick={toggleBurger1} className="burger-1"></div>
		</>
	);
};

export default BurgerBtn;
