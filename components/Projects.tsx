import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "A modern and minimalistic portfolio.",
    link: "https://github.com/ghost1034/PersonalPortfolio",
    technologies: [
      "Next.js",
      "React",
      "JavaScript/TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Graphosity",
    description:
      "Graphing calculator web app focused on effective graphical display. Supports login and calculation history functionality. Made during an internship with startup Cenports Commerce Inc.",
    link: "https://github.com/ghost1034/Graphosity",
    technologies: ["Laravel", "PostgreSQL", "Canvas API"],
  },
  {
    title: "Edufolio",
    description:
      "Cross-platform mobile app made for FBLA Mobile App Development allowing students to upload photos/videos with descriptions of academic and athletic achievements.",
    link: "https://github.com/ghost1034/Edufolio",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
    ],
  },
  {
    title: "Cryptogram Solver",
    description:
      "Allows users to run a local server running a Python script (forked from existing repo) that solves cryptograms. Includes a TamperMonkey script usable with cryptograms.puzzlebaron.com. Great for Science Olympiad Codebusters enthusiasts.",
    link: "https://github.com/ghost1034/CryptogramSolver",
    technologies: [
      "Python",
      "JavaScript",
    ],
  },
  {
    title: "Beehive Health Classifier",
    description:
      "Uses machine learning to classify beehive health status based on image and audio data. Datasets sourced from Kaggle.",
    link: "https://drive.google.com/drive/folders/1zAkqyKNCiKwWOggoPkWpvUddHAiqaQRC?usp=sharing",
    technologies: [
      "Python",
      "Google Colab",
      "scikit-learn",
      "TensorFlow",
    ],
  },
  {
    title: "Scioly Pololu Robot",
    description:
      "Code for the Pololu Romi 32U4 with movement sequences and target time control. Made for Science Olympiad Robot Tour.",
    link: "https://github.com/ghost1034/SciolyPololuRobot",
    technologies: [
      "C++",
      "Arduino",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
