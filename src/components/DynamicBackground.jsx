import React from "react";

const DynamicBackground = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* Additional background elements */}
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-3000"></div>
        <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-5000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-6000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-7000"></div>
      </div>
    </>
  );
};

export default DynamicBackground;
