'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProject } from '../../../../sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import { Project } from '../../../../types/Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Loader from '@/app/Loader';
type Props = {
  params: {
    project: string;
    tags: string[];
    projectimages: string[];
  };
};

export default function Project({ params }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProject() {
      const slug = params.project;
      const fetchedProject = await getProject(slug);
      setProject(fetchedProject);
    }

    fetchProject();
  }, [params.project]);

  useEffect(() => {
    if (project) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project.projectimages.length
        );
      }, 1500); // Change the duration as needed

      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="dark:bg-neutral-800 bg-zinc-100 py-[10rem]">
        <div className="md:grid md:grid-cols-2 px-5 container mx-auto block gap-4 ">
          {/* Image */}
          <div className="relative md:col-span-1 col-span-2">
            <Swiper
              className="mySwiper w-full h-full"
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 60,
                },
                1280: {
                  slidesPerView: 1,
                  spaceBetween: 70,
                },
                1536: {
                  slidesPerView: 1,
                  spaceBetween: 60,
                },
              }}
            >
              {project.projectimages.map((imageSrc, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={imageSrc}
                    alt={`${project.name} Image ${index}`}
                    width={580}
                    height={580}
                    className="rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <header className="md:-mt-0 mt-10">
            <h1 className="md:text-5xl text-xl dark:text-zinc-100 text-gray-700 font-bold">
              {project.name}
            </h1>

            <div className="text-2xl dark:text-zinc-100 text-gray-700 mt-12">
              <PortableText value={project.content} />
              {project.tags.map((tag, index) => (
                <p
                  key={index}
                  className="md:text-xl mt-4 text-xs bg-zinc-600 text-white py-2 px-4 hover:text-zinc-50/60 cursor-pointer hover:scale-105 duration-500 transition absolute rounded-lg"
                >
                  {tag}
                </p>
              ))}
            </div>
          </header>
        </div>
      </div>
    );
  }
}
