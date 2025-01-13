"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";

const navlinks = [
  { name: "Product", link: "/product" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
];

export default function Navbar() {
  const [toggle, settoggle] = React.useState(false);

  return (
    <div>
      <div className="w-full md:w-full 2xl:w-[1600px] 2xl:text-center 2xl:mx-auto fixed top-0 left-1/2 transform -translate-x-1/2">
        <div className="md:flex sm:px-8 md:px-16 lg:px-24  xl:px-40 items-center justify-between bg-white py-4">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <div className="ml-3 md:ml-0 w-40">
              <Image
                src="/assets/imgs/Logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div
            className="text-3xl absolute right-8 sm:right-16 top-6 cursor-pointer md:hidden"
            onClick={() => settoggle(!toggle)}
          >
            {toggle ? (
              <div className="text-3xl absolute top-0 cursor-pointer md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ) : (
              <div className="text-3xl absolute top-0 cursor-pointer md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:justify-end md:pb-0 h-screen md:h-auto md:w-full w-[205px] sm:w-[300px] pb-12 absolute 
            md:static bg-white md:z-auto text-sm z-[-1] left-0 pl-9   
            transition-all duration-300 ease-in-out ${
              toggle
                ? "top-100 opacity-100 text-black"
                : "left-[-490px] text-black md:opacity-100 opacity-0"
            }`}
          >
            {navlinks.map((link) => (
              <li
                key={link.name}
                className="md:mx-8 text-sm font-semibold h-8 leading-8 md:my-0 my-7"
              >
                <a
                  href={link.link}
                  className="text-[#0A2640] duration-500 transition-all ease-in-out "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button
              label="Login"
              variant="outlined"
              type="button"
              className="md:ml-0 xl:ml-4"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
