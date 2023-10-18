import DarkMode from "./darkMode";

const Navbar = () => {
  return (
    <nav className="min-h-full bg-skill-300 shadow-lg py-2 shadow-gray-500/50">
      <div className="flex flex-row justify-between">
        <div className="flex justify-start sm:px-2 lg:px-12">
          <h3 className="font-title text-2xl uppercase p-4">
            <span className="text-cyan-400">A</span>
            <span className="text-skill-400 ">nkit</span>{" "}
            <span className="text-cyan-400">B</span>
            <span className="text-skill-400">isen</span>
          </h3>
        </div>
        <div className="flex justify-end px-2 sm:px-2 lg:px-12 py-4 mr-2">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
