import React from "react";
import Image from "next/image";

type FooterDataType = {
  Landings: string[];
  Resources: string[];
  Company: string[];
};
type footerHeaderType = string[];

const footerHeader: footerHeaderType = ["Landings", "Company", "Resources"];
const footerData: FooterDataType = {
  Landings: ["Home", "Product", "Services"],
  Company: ["Home", "Careers", "Services"],
  Resources: ["Blog", "Products", "Services"],
};

export default function Footer() {
  return (
    <div className="space-y-6 mx-4 pt-16 sm:mx-8 md:mx-0 md:mb-6">
      <div className="flex flex-col sm:flex-row justify-between sm:space-x-12 md:space-x-16 lg:space-x-64">
        <div className="sm:w-[45%] md:w-[40%] lg:w-[30%]">
          <div className="mb-3 md:mb-0">
            <h5 className="font-fit text-2xl font-bold">
              <div className="">
                <Image
                  src="/assets/imgs/Logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </h5>
            <div className="md:py-4">
              <p className="py-3 md:py-0 text-sm font-normal md:leading-7 text-zinc-700">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:w-[55%]  md:w-[60%] lg:w-[70%] md:pr-10">
          {footerHeader?.map((item, index) => (
            <div className="pb-3 md:pb-0" key={index}>
              <h5 className="pb-2 text-sm font-bold">{item}</h5>
              {footerData[item as keyof typeof footerData]?.map((li, ind) => (
                <li
                  className="cursor-pointer list-none py-1 md:py-3 text-sm font-normal text-zinc-700"
                  key={ind}
                >
                  {li}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="relative divide-y text-[12px] sm:m-0 sm:p-0 text-xx py-5">
        <div className="">All rights reserved.</div>
      </div>
    </div>
  );
}
