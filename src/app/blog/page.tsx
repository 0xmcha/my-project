'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getBlog } from '../../../sanity/schemas/sanity-utils';
import { Blogs } from '../../../types/Blogs';
import { PortableText } from '@portabletext/react';
export default function Blog() {
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [selectedTag, setSelectedTag] = useState<string[] | null>(null); // State for selected filter tag
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const fetchedBlogs = await getBlog();
        setBlogs(fetchedBlogs);
      } catch (error) {}
    }

    fetchBlogs();
  }, []);
  const handleTagClick = (tag: string) => {
    setSelectedTag([tag]); // Wrap the tag in an array
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <section className="text-gray-600  dark:bg-neutral-900 bg-zinc-100  body-font">
        {/* Drop down */}

        <div className="container px-5 md:py-20 py-24 mx-auto grid grid-flow-row gap-10 justify-center">
          <div className="dropdown ">
            <label tabIndex={0} className="btn m-1" onClick={toggleDropdown}>
              Filter
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52 ${
                dropdownOpen ? 'open' : ''
              }`}
            >
              <li key="all">
                <a onClick={() => setSelectedTag(null)}>All</a>
              </li>
              {Array.from(new Set(blogs.flatMap((blog) => blog.tags))).map(
                (tag) => (
                  <li key={tag}>
                    <a onClick={() => handleTagClick(tag)}>{tag}</a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* End of drop down */}

          {/* Posts */}
          {blogs
            .filter(
              (blog) =>
                selectedTag === null ||
                selectedTag.some((tag) => blog.tags.includes(tag))
            )
            .map((blog) => (
              <div className="flex flex-nowrap -m-4" key={blog._id}>
                <div className="p-4 md:w-[1100px] w-[22.5rem] dark:bg-neutral-900">
                  <div className="h-full border-2 shadow-lg hover:scale-105 hover:duration-700 hover:transition border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h1 className="title-font md:flex md:justify-between items-center md:text-4xl text-xl font-medium dark:text-zinc-200 text-neutral-900 mb-5">
                        {blog.title}
                        <div className="md:flex md:justify-between ">
                          <span className="text-[16px] mr-4 text-gray-700/50">
                            {blog.publishedAt.toString()}
                          </span>
                          <span className="text-neutral-900 dark:text-zinc-100 md:text-[16px] text-sm p-2 rounded-lg dark:bg-zinc-500 cursor-pointer">
                            {blog.tags}
                          </span>
                        </div>
                      </h1>

                      <div className="flex gap-10 dark:text-zinc-200 text-neutral-900 mt-4 text-lg items-center flex-wrap ">
                        <Image
                          className="rounded-xl w-fit shadow-md"
                          src={blog.image}
                          alt={blog.title}
                          width={450}
                          height={450}
                        />
                        <PortableText value={blog.content} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* end if posts */}
        </div>
      </section>
    </div>
  );
}
