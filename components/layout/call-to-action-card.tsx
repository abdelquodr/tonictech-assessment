import { Button, Input } from "@/components/ui";
import React from "react";

export default function CallToAction() {
  return (
    <div className="w-full rounded-xl lg:my-10 xl:my-20 bg-[url('/assets/imgs/cta-bg.svg')] bg-cover bg-center">
      <div className="max-w-3xl p-4 mx-auto text-center md:py-8 lg:py-16">
        <p className="text-2xl md:text-4xl text-white font-normal md:leading-normal lg:leading-relaxed md:py-4 md:px-12 lg:px-20">
          An enterprise template to ramp up your company website
        </p>
        <div className="flex flex-col md:flex-row justify-center md:gap-4 py-3 md:py-5 items-center">
          <Input
            className="w-full sm:w-[24rem] text-xs md:text-sm md:w-72 py-5 pl-4"
            type="email"
            placeholder="Your email address"
          />
          <Button
            className="w-full sm:w-[24rem] mt-3 md:mt-0 md:w-auto py-3 px-6"
            label="Start now"
            variant="solid"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
}
