'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import Image from 'next/image';

import { GradientBox } from '@components/GradientBox';
import { SolidColorBlock } from '@components/SolidColorBlock';
import { Sponsors } from '@components/Sponsors';
import { TitleSubtitle } from '@components/TitleSubtitle';
import AlumniCompanies from '@components/Alumni';
import Wordmark from '@assets/wordmark.png';
import { PageContainer, SectionContainer } from '@components/Container';
import ExploreLink from '@components/ExploreLink';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Yale Computer Society';
  const typingSpeed = 100;
  const cursorBlinkSpeed = 530;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isTyping && displayText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <PageContainer>
      <div className="hidden md:flex justify-start items-start fixed top-0 left-0 w-full h-full -z-10">
        <div
          className="text-white opacity-[0.03] font-black"
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            fontSize: 'calc(40vw + 1rem)',
          }}
        >
          y/cs
        </div>
      </div>

      <SectionContainer>
        <p className="text-white font-semibold text-3xl md:text-5xl mb-4 bg-gradient-to-r from-ycs-pink to-ycs-pink text-transparent bg-clip-text">
          We are the
        </p>
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-semibold">
          <span className="whitespace-normal sm:whitespace-nowrap">
            {displayText}
            <span
              className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
            >
              |
            </span>
          </span>
        </h1>

        <div className="mt-16 text-xl">
          <p className="text-white max-w-3xl">
            The y/cs is a group of product enthusiasts that build software applications for Yale
            University&apos;s campus community and connect over our shared love for applied
            computing.
          </p>
          <ExploreLink href="/products" />
          <p className="mt-4 text-white text-lg max-w-2xl">
            Read about what we’re building, learning, and sharing on the{' '}
            <Link href="/blog" className="text-ycs-pink font-semibold hover:underline">
              y/cs blog
            </Link>
            .
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-20">
        <h2 className="text-white text-3xl font-semibold mb-8">By the numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolidColorBlock
            color={'zinc-500'}
            title={'80+'}
            desc={
              'Developers creating innovative applications to benefit the Yale and New Haven community.'
            }
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
          <SolidColorBlock
            color={'zinc-500'}
            title={'50+'}
            desc={
              'Catalyst program members taught and mentored each year, nurturing the next generation of developers.'
            }
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
          />
          <SolidColorBlock
            color={'zinc-500'}
            title={'20,000+'}
            desc={
              'Unique users across all y/cs applications, demonstrating our widespread campus impact.'
            }
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            }
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <TitleSubtitle
          title="Cultivating a passion for computer science, at all skill levels"
          subtitle=""
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <GradientBox
            title="Development"
            color="blue"
            text="Become a member of one of our software teams and help build applications that benefit the Yale and New Haven community."
            link="/products"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
          <GradientBox
            title="Mentorship"
            color="pink"
            text="New to software engineering? Learn from experienced mentors through our structured y/cs Catalyst Program."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
          />
          <GradientBox
            title="Events"
            color="green"
            text="Participate in social events, hackathons, and workshops, as well as interact with industry leaders on Yale's campus."
            link="/events"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <GradientBox
            title="Community"
            color="red"
            text="Find and connect with likeminded individuals through our Discord server. Join our community of developers and tech enthusiasts."
            link={'https://forms.gle/C4JvNKg5R19Khnpi9'}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />
        </div>
      </SectionContainer>

      <SectionContainer>
        <Sponsors />
      </SectionContainer>

      <AlumniCompanies />

      <SectionContainer className="">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border-l-4 border-ycs-pink">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-ycs-pink/10 blur-2xl"></div>
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-ycs-blue/10 blur-3xl"></div>

          <div className="absolute top-0 right-0 bottom-0 w-1/3 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={Wordmark}
                alt="YCS logo"
                className="opacity-10 object-contain mix-blend-normal hidden md:block"
                style={{
                  maxWidth: 'none',
                  width: '80%',
                  height: '80%',
                }}
              />
            </div>
          </div>

          <div className="relative z-10 p-10 md:p-16 flex">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to join Yale&apos;s premier tech community?
              </h2>

              <p className="mt-6 text-lg text-zinc-300">
                General membership applications are open year-round! Click below to learn more and apply.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center rounded-lg font-semibold text-lg bg-gradient-to-r from-ycs-pink to-ycs-pink/90 hover:from-ycs-pink hover:to-ycs-pink text-black py-3 px-8 transition-all duration-300 hover:shadow-lg hover:shadow-ycs-pink/20 hover:translate-y-[-2px]"
                >
                  Apply to Join
                </Link>

                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-lg font-bold text-lg bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-8 transition-all duration-300"
                >
                  Attend an Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Home;
