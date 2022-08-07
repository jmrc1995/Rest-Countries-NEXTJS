import { useTheme } from "next-themes";

import { BsSun, BsMoon } from "react-icons/bs";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="w-5 h-10 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoon
          className="w-5 h-10 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <div className="shadow-xl bg-white dark:bg-light-grey dark:text-white px-4 py-8 text-base flex items-center justify-between font-semibold ">
        <h1 className="">Where in the world ?</h1>

        {renderThemeChanger()}
      </div>
    </>
  );
}

export default Header;
