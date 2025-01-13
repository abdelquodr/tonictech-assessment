// @flow
import Image from "next/image";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

type CardProps = {
  title: string;
  date: string;
  description: string;
  author: string;
  imgSrc: string;
};
export default function card({
  title,
  date,
  description,
  author,
  imgSrc,
}: CardProps) {
  return (
    <div className="mb-4">
      <div className="">
        <div className="w-full h-[9rem] sm:h-[10rem] md:w-full md:h-[13rem] md:mb-4 flex items-center justify-center">
          <Image
            className="w-full h-full rounded-xl object-cover"
            src={imgSrc}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div>
        <h5 className="py-1 sm:py-2 text-sm text-[#0A2640] font-bold">
          {title}{" "}
          <span className="text-zinc-700 pl-2 md:pl-3 md:pl-4 font-normal">
            {" "}
            {date}
          </span>
        </h5>
        <p className="py-2 text-sm font-normal md:leading-6 md:py-4 ">
          {description}
        </p>
      </div>
      <div className="flex sm:py-2 flex-row items-center align-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="font-normal text-[13px] pl-3">{author}</span>
      </div>
    </div>
  );
}
