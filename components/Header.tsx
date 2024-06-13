const Header = () => {
  return (
    <header className="fixed w-full bg-gray-900 text-white py-4 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#intro" className="mx-2">Home</a>
          <a href="#about" className="mx-2">About</a>
          <a href="#projects" className="mx-2">Projects</a>
          <a href="#contact" className="mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
