import React from "react";

interface EducationItem {
  startDate: string;
  endDate?: string;
  schoolName?: string;
  description: string[];
}

const EducationData: EducationItem[] = [
  {
    startDate: "August 2022",
    endDate: "Present",
    schoolName: "Solon High School",
    description: [
      "GPA: 4.40 W, 3.99 UW",
      "Relevant - AP: CS A, Calc BC, Bio, Chem, Physics 1 & C Mech, Stats, Seminar",
      "Activities:",
      "Science Olympiad",
      "- Tech Manager, Cybersecurity Event Captain",
      " - 1st in Cybersecurity at 2024 OH State Tournament, 6th in Agri Sci at 2024 National Tournament",
      "Future Business Leaders of America",
      "- 9 national qualifying placements (6 state champion placements)",
      " - Relevant: 1st in Coding & Programming (2023), Mobile App Development (2024), Cybersecurity (2025) at OH states",
      "Future Problem Solving",
      " - 1st in Presentation of Action Plan at 2024 Ohio State Bowl (Topic: Autonomous Vehicles)",
    ],
  },
  {
    startDate: "Summer 2022",
    endDate: "Summer 2024",
    schoolName: "Cuyahoga Community College (College Credit Plus)",
    description: [
      "Relevant - Grade of A in:",
      "IT-1025: IT Concepts for Programmers, IT-1050: Programming Logic, IT-2650: Java Programming",
    ],
  },
  {
    startDate: "June 2024",
    endDate: "August 2024",
    schoolName: "Coursera (Online, DeepLearning.AI)",
    description: [
      "Completed lectures and labs in Python for:",
      "Machine Learning Specialization (3-course series)",
      "Deep Learning Specialization (5-course series)",
    ],
  },
];

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Education & Courses</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {EducationData.map((item, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === EducationData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.schoolName}
            </h3>
            <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
              <ul className="space-y-2">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
