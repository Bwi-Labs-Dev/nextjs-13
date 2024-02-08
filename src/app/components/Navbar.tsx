import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const Navbar = () => (
  <header className="h-15 w-full  shadow-sm dark:border-gray-700">
    <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
      <h2 className="font-bold text-3xl  text-gray-900 dark:text-white">
        Nextjs Style
      </h2>
      <ThemeSwitcher />
    </div>
  </header>
);

export default Navbar;
