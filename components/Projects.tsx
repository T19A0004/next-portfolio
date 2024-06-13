const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-2xl font-bold">Project 1</h3>
            <p className="mt-2">Description of project 1.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-2xl font-bold">Project 2</h3>
            <p className="mt-2">Description of project 2.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-2xl font-bold">Project 3</h3>
            <p className="mt-2">Description of project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
