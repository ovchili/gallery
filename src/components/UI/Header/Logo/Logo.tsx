import logo from "@/assets/images/logo.svg";

import style from "./Logo.module.scss";

const Logo = () => {
	return (
		<a href="#" className={style.logo}>
			<img src={logo} alt="Logo" />
		</a>
	);
};
export default Logo;
