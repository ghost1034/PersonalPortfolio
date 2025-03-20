import React from "react";

interface CurrentItem {
  description: string;
}

const CurrentData: CurrentItem[] = [
  {
    description: "Inkwise.ai: Testing platform and evaluating user experience of AI writing tool",
  },
  {
    description: "Scioly: Astronomy, Codebusters, Geologic Mapping event preparation",
  },
  {
    description: "Scioly: Building hovercraft + practicing Onshape CAD for Hovercraft and Engineering CAD",
  },
];

const CurrentlyDoing: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Currently Doing...</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {CurrentData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === CurrentData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CurrentlyDoing;
