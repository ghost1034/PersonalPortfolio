import React from "react";

const skillsData = [
  "Java",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PHP",
  "Tensorflow",
  "Pytorch",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "And more, just ask. Willing to learn new tools.",
];

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
