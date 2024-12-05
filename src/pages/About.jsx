import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBook,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";
import DynamicBackground from "../components/DynamicBackground";

function About() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-50 relative min-h-screen">
      <DynamicBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-12">
          <div className="max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Gambar Profile */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-rose-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative">
                  <img
                    src="/rozan-tr.png"
                    alt="Rozan Nouval"
                    className="w-64 h-64 rounded-full border-8 border-white shadow-2xl object-cover transform transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Informasi Profile */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="inline-flex px-6 py-2 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-full">
                  <span className="text-lg text-orange-600 font-medium">
                    Software Engineering Student
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Rozan Nouval
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A passionate software engineering student at SMK Yadika
                  Soreang, exploring the world of web development and turning
                  creative ideas into reality through code.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-medium">
                    Class of 2025
                  </span>
                  <span className="px-4 py-2 bg-rose-100 rounded-full text-rose-600 font-medium">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Education Journey */}
            <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-8 hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <FaGraduationCap className="text-3xl text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Education Journey
                </h2>
              </div>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-4 border-orange-500">
                  <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-orange-500"></div>
                  <h3 className="text-xl font-semibold text-orange-600">
                    Software Engineering
                  </h3>
                  <p className="text-gray-700">SMK Yadika Soreang</p>
                  <p className="text-gray-500">2022 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Learning web development fundamentals</li>
                    <li>• Building practical coding projects</li>
                    <li>• Participating in tech competitions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-8 hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-rose-100 p-4 rounded-2xl">
                  <FaCode className="text-3xl text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Technical Skills
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Responsive Web Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/50 px-4 py-3 rounded-xl text-center hover:bg-orange-100
                    hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Learning */}
            <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-8 hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-pink-100 p-4 rounded-2xl">
                  <FaRocket className="text-3xl text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Learning Path
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { tech: "Next.js", desc: "React Framework" },
                  { tech: "TypeScript", desc: "Type-Safe JavaScript" },
                  { tech: "Node.js", desc: "Backend Development" },
                ].map((item) => (
                  <div
                    key={item.tech}
                    className="bg-white/50 p-4 rounded-xl hover:bg-pink-50 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-800">{item.tech}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects & Activities */}
            <div className="bg-white/30 backdrop-blur-md rounded-[2rem] p-8 hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <FaTrophy className="text-3xl text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  School Activities
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <h3 className="font-semibold text-gray-800">
                    Programming Club Member
                  </h3>
                  <p className="text-gray-600">
                    Active participant in programming classes
                  </p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Projects
                  </h3>
                  <p className="text-gray-600">
                    Building practical web applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
