import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 w-full fixed top-0 bg-black shadow-md">
        <div className="flex">
          <h2 className="text-3xl text-white font-semibold leading-4">Mone</h2>
        </div>
        <div className="flex">
          <button className="rounded-full bg-slate-700 py-2 px-10 mx-1.5 uppercase font-medium text-white">
            Let's Talk
          </button>
          <button className="rounded-full uppercase py-2 px-8 mx-1.5 font-light bg-white text-black border border-gray-400">
            Menu
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
