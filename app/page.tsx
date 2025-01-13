import { Card, CallToAction } from "@/components/layout";
import { Button, Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-3 sm:mx-8 md:mx-0 mt-20  md:mt-36 ">
      <div className="border-b border-gray-900">
        <div>
          <p className="text-center font-sm font-semibold pb-3 md:pb-5">Blog</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-light">
            Thoughts and words
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between justify-stretch sm:gap-4 md:gap-12 lg:gap-16 sm:gap-20 md:gap-24 items-center pt-10 pb-2 md:py-16 lg:py-24">
          <div className="w-full h-[12rem] sm:h-[16rem] md:w-3/5 lg:w-1/2 md:h-[22rem] md:mb- flex items-center  justify-center">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={"/assets/imgs/card-1.svg"}
              alt="card-header"
              width={100}
              height={100}
              // layout="responsive"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="/assets/imgs/card-1.svg"
            />
          </div>
          <div className="md:w-2/5 lg:w-3/7">
            <h5 className="py-3 sm:py-0 text-sm text-[#0A2640]  font-bold">
              Category
              <span className="text-zinc-700 pl-3 md:pl-4 font-normal">
                {" "}
                November 22, 2021
              </span>
            </h5>
            <p className="text-2xl sm:py-3 md:text-3xl font-normal leading-8 md:leading-10 md:py-4 ">
              Pitch termsheet backing validation focus release.
            </p>
            <div className="flex my-2 flex-row items-center align-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="font-normal text-[13px] pl-3">
                Chandler Bing
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-9 sm:py-16 xl:px-16 lg:py-12 xl:py-16">
        <h1 className="text-2xl mb-2  md:mb-0 md:text-4xl font-light">
          Latest news
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 md:py-8 lg:py-10 xl:py-16">
          <Card
            title="Category"
            description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            date="November 22, 2021"
            author="Chandler Bing"
            imgSrc="/assets/imgs/card-1.svg"
          />
          <Card
            title="Category"
            description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            date="November 22, 2021"
            author="Chandler Bing"
            imgSrc="/assets/imgs/card-2.svg"
          />
          <Card
            title="Category"
            description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            date="November 22, 2021"
            author="Chandler Bing"
            imgSrc="/assets/imgs/card-3.svg"
          />
          <Card
            title="Category"
            description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            date="November 22, 2021"
            author="Chandler Bing"
            imgSrc="/assets/imgs/card-4.svg"
          />
          <Card
            title="Category"
            description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            date="November 22, 2021"
            author="Chandler Bing"
            imgSrc="/assets/imgs/card-3.svg"
          />
          <Card
            title="Category"
            description="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            date="November 22, 2021"
            author="Chandler Bing"
            imgSrc="/assets/imgs/card-4.svg"
          />
        </div>

        <div className="flex justify-center  sm:py-8">
          <Button
            className="text-center py-3 px-6 sm:px-8"
            label="Load More"
            variant="outlined"
            type="submit"
          />
        </div>
      </div>

      <CallToAction />
    </div>
  );
}
