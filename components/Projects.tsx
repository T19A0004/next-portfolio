import React from "react";
import CardComponent from "./CardComponent"; // Adjust the import path as necessary

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <CardComponent
              title="Project 1"
              description="Description of project 1."
              imageUrl="https://nextui.org/images/hero-card.jpeg"
              linkUrl="https://example.com/project1" // Replace with your actual link
            />
            <CardComponent
              title="Project 2"
              description="Description of project 2."
              imageUrl="https://nextui.org/images/hero-card.jpeg"
              linkUrl="https://example.com/project2" // Replace with your actual link
            />
            <CardComponent
              title="Project 3"
              description="Description of project 3."
              imageUrl="https://nextui.org/images/hero-card.jpeg"
              linkUrl="https://example.com/project3" // Replace with your actual link
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
