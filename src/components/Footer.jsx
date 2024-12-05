import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden border-t-4 border-orange-500/60">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-20 w-52 h-52 bg-orange-200 rounded-full filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 right-20 w-52 h-52 bg-rose-200 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10">
        {/* Vision Statement */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Transforming Ideas into Digital Reality
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Crafting modern web experiences with Next.js and React
          </p>
        </div>

        {/* Timeline Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="backdrop-blur-sm bg-white/30 p-6 rounded-3xl transform hover:scale-105 transition-transform">
            <div className="text-orange-500 font-semibold mb-2">2022</div>
            <h3 className="font-bold text-gray-800 mb-2">Journey Begins</h3>
            <p className="text-gray-600">Started frontend development journey with HTML, CSS, and JavaScript fundamentals</p>
          </div>

          <div className="backdrop-blur-sm bg-white/30 p-6 rounded-3xl transform hover:scale-105 transition-transform">
            <div className="text-orange-500 font-semibold mb-2">2023</div>
            <h3 className="font-bold text-gray-800 mb-2">React Mastery</h3>
            <p className="text-gray-600">Mastered React.js ecosystem and modern frontend library's</p>
          </div>

          <div className="backdrop-blur-sm bg-white/30 p-6 rounded-3xl transform hover:scale-105 transition-transform">
            <div className="text-orange-500 font-semibold mb-2">2024</div>
            <h3 className="font-bold text-gray-800 mb-2">Next.js Development</h3>
            <p className="text-gray-600">Building modern web applications with Next.js and expanding frontend capabilities</p>
          </div>
        </div>

        {/* Availability Status */}
        <div className="backdrop-blur-sm bg-white/30 p-6 rounded-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700 font-medium">Ready for Next.js Projects</span>
          </div>
        </div>

        {/* Copyright with Modern Touch */}
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="backdrop-blur-sm bg-white/50 px-8 py-3 rounded-full shadow-lg">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Rozan Nouval | Next.js Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
