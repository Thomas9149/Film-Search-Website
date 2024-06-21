import React from "react";

function Header({ pageBackground }) {
  return (
    <div >
      <nav
        className={`flex justify-between items-center w-full p-5`}
      >
        <a href="/home">
          <img
            className="w-[180px] cursor-pointer"
            src="/images/logo.png"
          ></img>
        </a>

        <ul className="w-full text-right pr-[60px]">
          <li className="inline-block mx-10 font-bold text-2xl">
            <a href="/home">Home</a>
          </li>
          <li className="inline-block mx-10 font-bold text-2xl">
            <a href="/about">About</a>
          </li>
          <li className="inline-block mx-10 font-bold text-2xl">
            <a href="/search">Search</a>
          </li>
        </ul>
        <button>
          <img className=" w-[180px]" src="/images/logo.png" />
          Bookings
        </button>
      </nav>
    </div>
  );
}

export default Header;
