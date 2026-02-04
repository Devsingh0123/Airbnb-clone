
import React from "react";
// components/Loader.jsx
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-rose-500 animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-sm font-medium">
          Loading our dashboard...
        </p>
      </div>
    </div>
  );
};

export default Loader;
