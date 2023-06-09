import React from "react";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center mt-8 text-[24px] lg:text-[32px] font-secondary font-semibold uppercase leading-[1] ">
          <a href="#" className="flex flex-col gap-3 text-white mr-4">
            <h1 className="text-accent">Zokrijonov</h1>
            <h1>Olimjon</h1>
          </a>
          <button className="btn btn-sm">work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
