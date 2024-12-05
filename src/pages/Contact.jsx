import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden py-12 2xl:py-0">
      {/* Background Dekorasi */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-rose-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 min-h-[80vh] 2xl:min-h-[90vh] flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Section */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-6 py-2 rounded-full">
                  <h3 className="text-xl text-orange-600 font-medium">Contact</h3>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Let's Build Something Amazing Together
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <SiGmail className="text-2xl text-orange-500" />
                  <a href="mailto:rozannouval@gmail.com" className="text-lg text-gray-600 hover:text-orange-500 transition-colors">
                    rozannouval@gmail.com
                  </a>
                </div>
                <div className="flex gap-6">
                  <a href="https://github.com/rozannouval" target="_blank" rel="noopener noreferrer" className="group bg-white/80 p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                    <FaGithub className="text-2xl text-gray-600 group-hover:text-orange-500" />
                  </a>
                  <a href="https://www.tiktok.com/@rozannouval.dev" target="_blank" rel="noopener noreferrer" className="group bg-white/80 p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                    <FaTiktok className="text-2xl text-gray-600 group-hover:text-orange-500" />
                  </a>
                  <a href="https://www.instagram.com/rznnvl_404/" target="_blank" rel="noopener noreferrer" className="group bg-white/80 p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                    <FaInstagram className="text-2xl text-gray-600 group-hover:text-orange-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full">
              <div className="backdrop-blur-sm bg-white/30 p-8 lg:p-12 rounded-3xl shadow-xl">
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-6 py-4 rounded-xl border-2 border-orange-100 focus:border-orange-500 focus:outline-none bg-white/50 backdrop-blur-sm transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-6 py-4 rounded-xl border-2 border-orange-100 focus:border-orange-500 focus:outline-none bg-white/50 backdrop-blur-sm transition-all"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        rows="6"
                        className="w-full px-6 py-4 rounded-xl border-2 border-orange-100 focus:border-orange-500 focus:outline-none bg-white/50 backdrop-blur-sm transition-all resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all text-lg font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
