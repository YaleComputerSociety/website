'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import Image from 'next/image';

import { LevelCard } from '@components/LevelCard';
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
          <LevelCard
            index={1}
            title="Development"
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
          <LevelCard
            index={2}
            title="Mentorship"
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
          <LevelCard
            index={3}
            title="Events"
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
          <LevelCard
            index={4}
            title="Community"
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

      <SectionContainer>
        <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] px-8 py-14 ring-1 ring-white/10 md:px-16 md:py-20">
          {/* brand wordmark watermark, centered in the right third with comfortable margin */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 items-center justify-center overflow-hidden md:flex">
            <Image
              src={Wordmark}
              alt=""
              aria-hidden
              className="object-contain opacity-[0.06]"
              style={{ maxWidth: 'none', width: '80%', height: '80%' }}
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to join Yale&apos;s premier tech community?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              General membership applications are open year-round! Click below to learn more and
              apply.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Apply to Join
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-semibold text-white ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/5 hover:ring-white/25"
              >
                Attend an Event
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Home;
