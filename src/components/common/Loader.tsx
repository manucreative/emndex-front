import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
      <img src="/assets/img/loader.gif" alt="Loading..." className="w-40 h-40" />

    </div>
  );
};

export default Loader;
