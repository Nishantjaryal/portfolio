"use client";

import { experienceList, Latest_project_List } from "@/data";
import Image from "next/image";
import { useState } from "react";

const ProjectList = () => {
  const [link, setLink] = useState(Latest_project_List[0]?.link ?? "");
  return (
    <div
      data-component="Container"
      className="mx-auto w-[95%] px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
    >
      <div className="flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
            experience
          </div>
        </div>
        <div
          data-component="Text"
          className="text-[var(--color-text-secondary)] text-pretty"
        >
          From AI-powered applications to scalable web platforms, I'm on a
          mission to build technology that makes a difference.
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <ul className="space-y-0 divide-y divide-[var(--color-border)]">
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
        </div>
        <div className="w-1/2 pl-4">
          <iframe
            className="w-full h-full"
            id="inlineFrameExample"
            title="Inline Frame Example"
            src={link}
          ></iframe>
        </div>
      </div>

      <div>
        <ul className="space-y-0 divide-y divide-[var(--color-border)]">
          {experienceList.map((experience) => (
            <li key={experience.id} className="py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-transparent text-[var(--color-text)] flex items-center justify-center text-sm font-semibold">
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
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {experience.role}
                    </h3>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
