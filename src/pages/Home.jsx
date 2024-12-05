import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaUserTie, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden py-12 2xl:py-0">
      {/* Dekorasi Background Orange bulat */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-rose-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 min-h-[80vh] 2xl:min-h-[90vh] flex items-center relative z-10">
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-between items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left backdrop-blur-sm bg-white/30 p-8 rounded-3xl">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-6 py-2 rounded-full">
                <h3 className="text-xl text-orange-600 font-medium">
                  Hello, I'm
                </h3>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                <span className="mr-4">Rozan</span>
                Nouval
              </h1>
              <div className="space-y-2">
                <p className="text-2xl lg:text-3xl text-gray-700 font-bold">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Passionate about creating engaging web experiences through clean
              code and modern design principles. Transforming ideas into
              interactive realities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Introduction Button */}
              <button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-10 pt-[1.125rem] pb-3 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all text-xl font-semibold flex gap-2">
                <FaUserTie className="text-2xl" />
                Introduction
              </button>

              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1LIBLca4PZdd5xRiH8Eaz23OksXNbh_bq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-500 px-10 pt-4 pb-3 rounded-full hover:bg-white hover:text-orange-600 transition-all text-xl duration-300 font-semibold flex gap-2"
              >
                <FaFileDownload className="text-2xl" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 justify-center md:justify-start pt-6">
              <a
                href="https://github.com/rozannouval"
                target="_blank"
                className="group bg-white/80 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <FaGithub className="text-2xl text-gray-600 group-hover:text-orange-500 transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@rozannouval.dev"
                target="_blank"
                className="group bg-white/80 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <FaTiktok className="text-2xl text-gray-600 group-hover:text-orange-500 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/rznnvl_404/"
                target="_blank"
                className="group bg-white/80 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <FaInstagram className="text-2xl text-gray-600 group-hover:text-orange-500 transition-colors" />
              </a>
              <a
                href="mailto:rozannouval@gmail.com"
                target="_blank"
                className="group bg-white/80 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <SiGmail className="text-2xl text-gray-600 group-hover:text-orange-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-orange-600 to-rose-600 blur rounded-full opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <img
                src="/rozan1.png"
                alt="Rozan Nouval"
                className="w-80 md:w-[450px] rounded-full border-[12px] border-white shadow-2xl group-hover:scale-105 transition-all duration-500 ease-out"
              />

              {/* Dekorasi background orange bulat */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-400/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-rose-400/40 rounded-full blur-xl animate-pulse delay-700"></div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
