const Introduction = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-black dark:text-white text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg">I am a software developer specializing in modern web development technologies.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img src="/path/to/your/photo.jpg" alt="Your Photo" className="w-1/2 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
