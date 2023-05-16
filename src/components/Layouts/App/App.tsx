import Header from "@/components/UI/Header/Header";
import Main from "@/components/UI/Main/Main";
import style from "./App.module.scss";

const App = () => {
	return (
		<div className={style.App}>
			<Header />
			<Main />
		</div>
	);
};

export default App;
