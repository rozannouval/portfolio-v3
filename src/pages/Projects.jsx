import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio v1",
      description: "Modern and responsive portfolio website built with HTML and Tailwind CSS",
      tech: ["HTML", "Tailwind CSS"],
      live: "https://rozan-portfolio-1.netlify.app/",
      image: "/projects/portfolio-v1.png"
    },
    {
      title: "Portfolio v2",
      description: "Modern and responsive portfolio website built with Next.js and Tailwind CSS",
      tech: ["Next.js", "Tailwind CSS"],
      live: "https://rozan-nouval.vercel.app",
      image: "/projects/portfolio-v2.png"
    },
    {
      title: "Daftar Anime Ku",
      description: "Modern and responsive website list score anime with REST API from Jikan API",
      tech: ["Next.js", "REST API", "Tailwind CSS"],
      live: "https://task-manager-rozan.vercel.app",
      image: "/projects/daftaranimeku.png"
    },
    {
      title: "Google Company",
      description: "Modern and responsive website Google Company landing page with HTML",
      tech: ["HTML", "Tailwind CSS"],
      live: "https://google-company.vercel.app",
      image: "/projects/google-company.png"
    },
    {
      title: "Cloning SMK Yadika Soreang",
      description: "Modern and responsive website SMK Yadika Soreang unofficial",
      tech: ["Next.js", "Tailwind CSS"],
      live: "https://smkyadikasoreang.netlify.app",
      image: "/projects/smk-yadika-soreang.png"
    },
    {
      title: "Todo List",
      description: "Modern and responsive website Todo List using Local Storage",
      tech: ["Next.js", "Tailwind CSS", "Local Storage"],
      live: "https://to-do-list-rzn.vercel.app/",
      image: "/projects/todo-list.png"
    },
  ];

  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-50 relative min-h-screen py-20">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-rose-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-6 py-2 rounded-full mb-4">
            <h3 className="text-xl text-orange-600 font-medium">My Work</h3>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my latest web development projects. Each project represents my journey in creating
            meaningful and interactive web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group backdrop-blur-sm bg-white/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 space-x-4">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block p-3 bg-white/90 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
 