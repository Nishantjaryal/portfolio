"use client";

import { experienceList, Latest_project_List } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { TooltipContent } from "./footerlinkstooltip";

const ProjectList = () => {
  const [link, setLink] = useState(Latest_project_List[0]?.link ?? "");
  return (
    <div
      data-component="Container"
      className="mx-auto w-[95%] px-6 lg:px-10 mb-7 flex flex-col gap-10 sm:gap-12"
    >
      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full flex-col pb-4 border-b-2">
        <div className="flex max-w-3xl flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
              Recent Projects
            </div>
          </div>
          <div
            data-component="Text"
            className="text-[var(--color-text-secondary)] text-pretty "
          >
            From AI-powered applications to scalable web platforms, I'm on a
            mission to build technology that makes a difference.
          </div>
        </div>
      </div>

      <div className="flex max-md:flex-col w-full h-full gap-5">
        <ul className="space-y-0 w-1/2 max-md:w-full min-w-[300px] divide-y divide-[var(--color-border)]">
          {Latest_project_List.map((project) => (
            <li
              key={project.id}
              onMouseEnter={() => setLink(project.link)}
              onFocus={() => setLink(project.link)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block px-0 py-6 transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-60"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {project.location}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <div className="w-1/2 max-md:w-full flex flex-col justify-center items-center  min-w-[300px]  h-full">
          <TooltipContent />
        </div>
      </div>
      </div>
      
<div className="flex w-full flex-col gap-7">
  <div className="border-b-2 py-4">
        <div className="flex max-w-4xl flex-col  mt-7 gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
              Work Experience
            </div>
          </div>
          <div
            data-component="Text"
            className="text-[var(--color-text-secondary)] text-pretty"
          >
           
In Alesa AI, I led frontend development of AI-powered web dashboards and chatbot interfaces using React and TypeScript. In Cycrew, I designed and built AI-driven cybersecurity automation solutions to detect and mitigate modern security threats.

          </div>
          
        </div>
      </div>

      <div>
        <ul className="space-y-0 divide-y divide-[var(--color-border)]">
          {experienceList.map((experience) => (
            <li key={experience.id} className="py-6">
              <a href={experience.Acknowledgement}>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-transparent text-[var(--color-text)] flex items-center justify-start text-sm font-semibold">
                  {experience.logo ? (
                    <Image
                      src={experience.logo}
                      alt={experience.logoText ?? experience.company}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span>{experience.logoText}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {experience.role}
                    </h3> 
                    <svg
                    className="mr-4 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                    </div>
                   
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {experience.company} · {experience.employmentType}
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {experience.dateRange} · {experience.duration}
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {experience.location}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                    {experience.description}
                  </p>
                  {experience.skills?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
</div>
      
    </div>
  );
};

export default ProjectList;
