import Image from "next/image";
import ProfilePic from "@/app/images/ian.png";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <h1 className="text-4xl font-bold mb-4">Ian Stewart</h1>
        <p className="text-base text-gray-800 dark:text-gray-300">
          HS junior with experience in STEM and software development. Strong communication skills and a determination to learn.
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src={ProfilePic}
          alt="Ian"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
