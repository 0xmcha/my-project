'use client';
import Image from 'next/image';
import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { getProjects } from '../../../sanity/schemas/sanity-utils';
import Loader from '../Loader';
import { Project } from '../../../types/Project';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string[] | null>(null); // State for selected filter tag
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      const projects = await getProjects();
      setProjects(projects);
    }

    fetchProjects();
  }, []);

  const handleTagClick = (tag: string[] | null) => {
    setSelectedTag(tag);
    setDropdownOpen(false); // Close the dropdown when a tag is clicked
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Suspense fallback={<Loader />}>
      <section className="text-gray-600 dark:bg-neutral-900 bg-zinc-100 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-14">
            <div className="w-full z-50 flex justify-center mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl md:text-4xl font-medium title-font mb-2 dark:text-zinc-50 text-gray-900">
                Our Latest <span className="text-[#CC444B]">Projects</span>
              </h1>
            </div>

            {/* drop down */}
            <div className="dropdown -mb-5">
              <label tabIndex={0} className="btn m-1" onClick={toggleDropdown}>
                Filter
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content z-50  menu p-2 shadow bg-base-100 rounded-box w-52 ${
                  dropdownOpen ? 'open' : ''
                }`}
              >
                <li key="all">
                  <a onClick={() => setSelectedTag(null)}>All</a>
                </li>
                {projects
                  .map((project) => project.tags)
                  .flat() // Flatten the array of arrays into a single array of tags
                  .filter((tag, index, self) => self.indexOf(tag) === index) // Remove duplicates
                  .map((tag) => (
                    <li key={tag}>
                      <a onClick={() => handleTagClick([tag])}>{tag}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-16 ml-8 md:ml-0 -m-5">
            {projects
              .filter(
                (project) =>
                  selectedTag === null ||
                  (project.tags &&
                    project.tags.some((tag) => selectedTag.includes(tag)))
              )
              .map((project) => (
                <Link
                  href={`/projects/${project.slug}`}
                  className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-500 transition"
                  key={project._id}
                >
                  {/* First Card */}
                  <div className="mx-auto mt-11 w-80 h-80 transform overflow-hidden rounded-lg bg-white dark:bg-gradient-to-r from-gray-800 to-neutral-800 shadow-xl dark:shadow-lg duration-300 hover:scale-105 hover:shadow-lg">
                    <p className="bg-gray-500 text-center text-sm absolute mt-2 p-2 ml-2 rounded-lg text-white">
                      {project.tags.join(', ')}
                    </p>
                    <Image
                      className="h-48 w-full object-cover object-center"
                      src={project.image}
                      width={130}
                      height={130}
                      alt="Product Image"
                    />
                    <div className="p-4">
                      <h2 className="mb-2 text-xl font-bold dark:text-white text-gray-900">
                        {project.name}
                      </h2>
                      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
}
