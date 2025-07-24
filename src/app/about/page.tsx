import Image from 'next/image';
import Link from 'next/link';

import { GoArrowUpRight } from 'react-icons/go';

import { STORIES } from '@data';
import { Sponsors } from '@components/Sponsors';
import { PageContainer, SectionContainer } from '@components/Container';
import gala from '@assets/groupphoto.jpg';
import demoday from '@assets/demo day.jpg';

const About = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">About y/cs</h1>
        <p className="text-zinc-400 text-xl mb-16 max-w-2xl">
          The community for engineers & designers at Yale
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-zinc-200 text-lg leading-relaxed mb-8">
              As the place for CS at Yale, we&#39;re a team of computer science enthusiasts looking
              to revolutionize the campus and make students&#39; lives easier through the use of
              technology.
            </p>
            <p className="text-zinc-200 text-lg leading-relaxed">
              We develop high-quality, open-source products, host speaker events with technologists
              and industry professionals, and break barriers for students to gain real-world
              software engineering experience by welcoming people of all backgrounds.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden relative h-96">
            <Image
              src={gala}
              alt="Yale Computer Society team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white text-sm p-4">
                Yale Computer Society team at our annual gala, 2025
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-32">
        <div className="border-b border-zinc-800 pb-4 mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Our Mission & Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">We Seek Impact</h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              We are committed to building impactful products that enhance the Yale experience for
              students, faculty, and staff. Our goal is to create a more connected and efficient
              campus through technology, making it easier for everyone to access information and
              resources.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6">We Welcome Learning</h3>
            <p className="text-zinc-300 text-lg leading-relaxed">
              We understand that not everyone has a background in computer science or technology,
              and we embrace this diversity. Our community is open to all students, regardless of
              their experience level. We value people who are willing to work and push themselves to
              learn new things. We want people who can push themselves.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Core Values</h3>
            <ul className="text-zinc-300 text-lg space-y-6">
              <li className="flex">
                <div className="bg-ycs-pink/20 p-4 rounded-full h-16 w-16 flex items-center justify-center mr-6 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ycs-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xl font-medium mb-1">Inclusion</h4>
                  <p>We welcome students of all backgrounds and experience levels</p>
                </div>
              </li>

              <li className="flex">
                <div className="bg-ycs-green/20 p-4 rounded-full h-16 w-16 flex items-center justify-center mr-6 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ycs-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xl font-medium mb-1">Impact</h4>
                  <p>We build solutions that meaningfully improve campus life</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-ycs-blue/20 p-4 rounded-full h-16 w-16 flex items-center justify-center mr-6 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ycs-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xl font-medium mb-1">Drive</h4>
                  <p>We love people who push themselves</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-32">
        <div className="border-b border-zinc-800 pb-4 mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Our Story</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {STORIES.map((story, i) => (
            <div key={i} className="md:col-span-4">
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">{story.data}</h3>
              <p className="text-zinc-300 text-lg">{story.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="mt-32 mb-10">
        <div className="border-b border-zinc-800 pb-4 mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-zinc-400 text-lg mt-2">The talented students who make y/cs possible</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              We&#39;re a diverse group of passionate computer science students working together to
              create amazing technology. Join us in shaping the future of tech at Yale.
            </p>

            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-white hover:text-ycs-pink transition-all duration-300"
            >
              <span className="text-lg font-medium">Meet the full team</span>
              <GoArrowUpRight className="text-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <div className="relative rounded-lg overflow-hidden h-80 group">
              <Image
                src={demoday}
                alt="Team collaboration"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm p-4">
                  y/cs members hack away during one of our BuildFests, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <Sponsors />
    </PageContainer>
  );
};

export default About;
