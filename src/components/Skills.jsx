import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <svg
              className="h-8 w-8 text-blue-500 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Frontend Development</h3>
              <p className="text-gray-600">
                HTML, CSS, JavaScript, ReactJS, AngularJS
              </p>
            </div>
          </div>
          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-8 w-8 fill-blue-500 mr-4"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Backend Development</h3>
              <p className="text-gray-600">Node.js, .NET Core, Java</p>
            </div>
          </div>
          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-8 w-8 fill-blue-500 mr-4"
            >
              <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Mobile development</h3>
              <p className="text-gray-600">Kotlin</p>
            </div>
          </div>
          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-8 w-8 mr-4 fill-blue-500"
            >
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Database Management</h3>
              <p className="text-gray-600">MySQL</p>
            </div>
          </div>
          {/* Skill Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-8 w-8 mr-4 fill-blue-500"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Libraries</h3>
              <p className="text-gray-600">
                TailwindCSS, BootstrapCSS, PrismaORM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
