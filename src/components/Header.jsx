const Header = () => {
  return (
    <nav className="border-b-2 p-2 flex justify-between items-center">
      <h1 className="text-2xl ">Data Analysis</h1>
      <div className="flex space-x-2 ">
        <button className="border-2 rounded-lg text-black font-medium p-2">
          Login
        </button>
        <button className="border-2 rounded-lg text-black font-medium p-2">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Header;
