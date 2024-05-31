import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Software Development Project 1",
      description:
        "The first school project I worked on in a team of 5. We had to create a small Java application that was connected to a MySQL database. It was a simple board game built in JavaFX. But I learned a lot about working in a team and how to communicate with each other.",
      link: "",
    },
    {
      title: "ReactJS Project",
      description:
        "In my second year of college, I had to create a small ReactJS web application. I decided to create a small quiz application. I learned a lot about ReactJS and how to work with API's. I also learned how to work with a design system and how to make a responsive web application.",
      link: "https://github.com/Warrevdh/Quizmaker",
    },
    {
      title: "Software Development Project 2",
      description:
        "As a second project in a team of 5, we had to create a ReactJS webstore application that was connected to a MySQL database. This database was also linked to a Java application that was used to manage the database. I learned a lot about working in a team and deviding tasks between each other. I also learned how to work with a REST API and how to make a web application that was connected to a database.",
      link: "https://github.com/Warrevdh/SDP2",
    },
    {
      title: "Android Project",
      description:
        "In my third year of college, I had to create a small Android application. This application is written in Kotlin. I decided to create an app that generates a random activity to do. A user can select a category and the app will generate a random activity that the user can do. I learned a lot about Android development and how to work with the Android Studio IDE. I also learned how to work with the Android lifecycle and how to make a responsive Android application.",
      link: "https://github.com/Warrevdh/Android",
    },
    {
      title: "DevOps Project",
      description:
        "Another project I worked on in my third year of college was a DevOps project. This was in a team of 10 students, 6 developers and 4 operations. The developers were responsible for creating a web application in C# and a mobile application in Kotlin. This was the first project where I had to work together with operations students. I learned a lot about how to work together with operations students and how to deploy an application to a server. I also learned how to make a CI/CD pipeline.",
      link: "https://github.com/Warrevdh/DevOps",
    },
    {
      title: "Internship Projects",
      description:
        "During my internship I had to work in a team of 3 developers. Most of the time I worked on ReactJS projects that had to be linked to their website through HubSpot CMS. I learned a lot about how to work with a CMS and how to make a web application that was linked to a CMS. I also learned how to work with a design system and how to make a responsive web application.",
      link: "",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-500 hover:underline mt-auto"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
