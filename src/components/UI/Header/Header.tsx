import Logo from "./Logo/Logo";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
};
export default Header;
