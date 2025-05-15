'use client';

import Link from 'next/link';
import { GoArrowUpRight, GoCheckCircle } from 'react-icons/go';

const ROLES = [
  {
    title: 'Software Engineer',
    desc: "Develop one of the y/cs's current or upcoming products.",
    icon: (
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
    ),
    color: 'ycs-blue',
  },
  {
    title: 'Catalyst Developer',
    desc: 'Hone your development skills in a beginner-friendly software program designed to prepare you to work on one of our products.',
    icon: (
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
    ),
    color: 'ycs-pink',
  },
  {
    title: 'UI/UX Designer',
    desc: 'Design Figma wireframes and collaborate with development teams to bring products to life.',
    icon: (
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    color: 'ycs-green',
  },
];

// Role Card Component
interface RoleCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const RoleCard = ({ title, desc, icon, color }: RoleCardProps) => {
  return (
    <div
      className={`bg-zinc-800/40 rounded-lg overflow-hidden border-l-4 border-${color} hover:translate-y-[-4px] transition-all duration-300 h-full`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg bg-${color}/20 mr-4 text-white`}>{icon}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-zinc-300 flex-grow">{desc}</p>
      </div>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({
  number,
  title,
  children,
}: {
  number: string | number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <div className="bg-ycs-pink/20 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-ycs-pink font-bold">
          {number}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="pl-14">
        <div className="text-zinc-300 text-lg">{children}</div>
      </div>
    </div>
  );
};

const Join = () => {
  const applicationsOpen = false;

  return (
    <div className="mb-20 px-6 pt-24">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Join y/cs</h1>
        <p className="text-zinc-400 text-xl mb-8 max-w-2xl">
          We are Yale&apos;s largest collective of software developers, product designers, and
          computer science enthusiasts.
        </p>

        {applicationsOpen && (
          <div className="bg-gradient-to-r from-ycs-pink/20 to-transparent p-6 rounded-lg border-l-4 border-ycs-pink mb-12">
            <div className="flex items-center">
              <div className="mr-4 text-ycs-pink">
                <GoCheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Applications are open now!</h3>
                <p className="text-zinc-300 mt-1">
                  Apply before the deadline to join our community for the Fall 2024 semester.
                </p>
              </div>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5SHLgU1WBu6DyAIebNDJ3t-bx5XMh5aEcPkUG0ypAGFEd0w/viewform?usp=dialog"
                className="ml-auto bg-ycs-pink hover:bg-ycs-pink/90 text-black py-2 px-6 rounded-lg transition-all duration-300 flex items-center whitespace-nowrap"
                target="_blank"
              >
                Apply Now
                <GoArrowUpRight className="ml-2" />
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto mt-16">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Available Roles</h2>
          <p className="text-zinc-400 text-lg mt-2">
            Explore the diverse opportunities to contribute and grow with our dynamic team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROLES.map((role, index) => (
            <RoleCard
              key={index}
              title={role.title}
              desc={role.desc}
              icon={role.icon}
              color={role.color}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-32">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Application Process</h2>
          <p className="text-zinc-400 text-lg mt-2">
            Applications open at the beginning of each semester. We try to keep our process as short
            and sweet as possible.
          </p>
        </div>

        <div className="bg-zinc-800/30 rounded-lg p-8 md:p-10">
          <ProcessStep number="1" title="Written Application">
            <p>
              Indicate which divisions or teams you are interested in joining, share a bit about
              yourself, and why you&apos;re interested in joining y/cs.
            </p>
          </ProcessStep>

          <ProcessStep number="2" title="Interview/Challenge">
            <p className="mb-4">
              For those applying for technical roles, we have a technical interview.
            </p>
            <p className="mb-4">
              Those applying for product teams are evaluated on their ability to operate the
              tools/skills used to build the products.
            </p>
            <p className="mb-4">
              We don&apos;t expect everyone to come to Yale knowing how to use these tools/skills,
              which is why we have beginner{' '}
              <span className="text-ycs-pink font-semibold">Catalyst</span> programs designed to
              teach them to you! Those applying for beginner programs are evaluated on their
              ability/willingness to learn new technical concepts in a take-home challenge, with
              lots of office hour opportunities to help you complete it.
            </p>
            <p>
              For those applying for non-technical roles (design, events, outreach), we do a short,
              non-technical interview.
            </p>
          </ProcessStep>

          <ProcessStep number="3" title="Team Placement">
            <p>
              Based on your written application and interview you are placed on a y/cs team, as
              space permits.
            </p>
          </ProcessStep>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-32">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-lg mt-2">Common questions about joining y/cs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-800/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Do I need prior experience?</h3>
            <p className="text-zinc-300">
              Not at all! Our Catalyst program is specifically designed for beginners who want to
              learn development skills. For more advanced roles, experience is helpful but
              enthusiasm and willingness to learn are equally important.
            </p>
          </div>

          <div className="bg-zinc-800/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">What is the time commitment?</h3>
            <p className="text-zinc-300">
              Time commitments vary by role. Development teams typically meet 2-3 hours per week,
              with additional time for individual work. The Catalyst program requires 4-6 hours
              weekly. Design, outreach, and events roles have more flexible schedules.
            </p>
          </div>

          <div className="bg-zinc-800/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Do I need to be a CS major?</h3>
            <p className="text-zinc-300">
              Not at all! We welcome students from all majors and backgrounds. Many of our most
              successful members come from non-CS fields but share a passion for technology.
            </p>
          </div>

          <div className="bg-zinc-800/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              When will I hear back about my application?
            </h3>
            <p className="text-zinc-300">
              We typically review applications within 1-2 weeks after the deadline. You&apos;ll be
              notified by email about interview invitations and final decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-32">
        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-lg overflow-hidden border-l-4 border-ycs-pink p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-white text-3xl font-bold mb-4">Interested in joining?</h2>
            {applicationsOpen ? (
              <>
                <p className="text-zinc-300 text-lg mb-8">
                  Join our community of passionate developers, designers, and tech enthusiasts.
                  Applications for Fall 2024 are now open!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe5SHLgU1WBu6DyAIebNDJ3t-bx5XMh5aEcPkUG0ypAGFEd0w/viewform?usp=dialog"
                    className="inline-flex items-center justify-center rounded-lg font-bold text-lg bg-ycs-pink hover:bg-ycs-pink/90 text-black py-3 px-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                    target="_blank"
                  >
                    Apply Now
                    <GoArrowUpRight className="ml-2" />
                  </Link>

                  <Link
                    href="mailto:yale.computer.society@gmail.com"
                    className="inline-flex items-center justify-center rounded-lg font-bold text-lg bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-8 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="text-zinc-300 text-lg mb-8">
                  Applications are currently closed. Check back at the beginning of next semester or
                  reach out to learn more!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="mailto:yale.computer.society@gmail.com"
                    className="inline-flex items-center justify-center rounded-lg font-bold text-lg bg-zinc-700 hover:bg-zinc-600 text-white py-3 px-8 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
