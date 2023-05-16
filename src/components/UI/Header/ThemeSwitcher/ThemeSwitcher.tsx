import { MdSunny } from "react-icons/md";
import style from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
	const handleClick = () => {
		const theme = (document.querySelector("#root") as HTMLElement).dataset
			.theme;

		theme === "dark"
			? ((document.querySelector("#root") as HTMLElement).dataset.theme =
					"light")
			: ((document.querySelector("#root") as HTMLElement).dataset.theme =
					"dark");
	};

	return (
		<button className={style.button} onClick={handleClick}>
			<MdSunny />
		</button>
	);
};
export default ThemeSwitcher;
