'use client';

import '@styles/App.css';
import { useState, useEffect, SetStateAction } from 'react';
import { BOARD, loadMembers, Member } from '@data';
import {
  GoCheck,
  GoX,
  GoArrowUp,
  GoArrowDown,
  GoFilter,
  GoSearch,
  GoArrowUpRight,
  GoLinkExternal,
} from 'react-icons/go';
import Link from 'next/link';

import Image from 'next/image';

import { useAuth } from '@components/AuthContext';
import { PageContainer, SectionContainer, Container } from '@components/Container';
import Wordmark from '@assets/wordmark.png';

import { StaticImageData } from 'next/image';

interface TeamMemberProps {
  person: {
    name: string;
    image: string | StaticImageData;
    linkedin?: string;
    team: string;
    role?: string;
    major?: string;
  };
}

const TeamMember = ({ person }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center transition-all duration-300 hover:translate-y-[-8px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <div className="relative h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 overflow-hidden rounded-xl">
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 33vw, 20vw"
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute bottom-3 right-3 bg-white/90 text-zinc-800 p-2 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            aria-label={`${person.name}'s LinkedIn profile`}
          >
            <GoLinkExternal className="w-4 h-4" />
          </a>
        )}
      </div>

      <h3 className="text-xl font-bold text-white text-center">{person.name}</h3>
      <p className="text-ycs-pink font-mono text-sm text-center">
        {person.team === 'Board' ? person.role : person.team}
      </p>
      {person.major && <p className="text-zinc-400 text-sm text-center mt-1">{person.major}</p>}
    </div>
  );
};

interface Person {
  name: string;
  role: string;
  team: string;
  year?: number;
}

const Masthead = ({ people }: { title: string; people: Person[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRole, setActiveRole] = useState('All');
  const [activeTeam, setActiveTeam] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filteredPeople, setFilteredPeople] = useState(people);
  const [showFilters, setShowFilters] = useState(false);

  const allRoles = ['All', ...Array.from(new Set(people.filter((person) => !person.role.includes(";")).map((person) => person.role)))].sort();
  const allTeams = ['All', ...Array.from(new Set(people.filter((person) => !person.team.includes(";")).map((person) => person.team)))].sort();

  useEffect(() => {
    let results = [...people];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (person) =>
          person.name.toLowerCase().includes(term) ||
          person.role.toLowerCase().includes(term) ||
          (person.team && person.team.toLowerCase().includes(term))
      );
    }

    if (activeRole !== 'All') {
      results = results.filter((person) => person.role.includes(activeRole));
    }

    if (activeTeam !== 'All') {
      results = results.filter((person) => person.team.includes(activeTeam));
    }

    results.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'year':
          comparison = (a.year || 9999) - (b.year || 9999);
          break;
        case 'role':
          comparison = a.role.localeCompare(b.role);
          break;
        case 'team':
          comparison = (a.team || '').localeCompare(b.team || '');
          break;
        default:
          comparison = 0;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

    setFilteredPeople(results);
  }, [people, searchTerm, activeRole, activeTeam, sortBy, sortDirection]);

  const handleSort = (column: SetStateAction<string>) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const SortIndicator = ({ column }: { column: string }) => {
    if (sortBy !== column) return null;

    return sortDirection === 'asc' ? (
      <GoArrowUp className="inline ml-1 text-xs" />
    ) : (
      <GoArrowDown className="inline ml-1 text-xs" />
    );
  };

  const FilterOption = ({
    active,
    label,
    onClick,
  }: {
    active: boolean;
    label: string;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        active ? 'bg-ycs-pink text-white' : 'bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-zinc-800/30 rounded-lg p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search people..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-700/50 text-white pl-10 pr-4 py-2 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-ycs-pink/50"
            />
            <GoSearch className="absolute left-3 top-2.5 text-zinc-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-white"
              >
                <GoX />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-zinc-700/50 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <GoFilter />
            <span>Filters</span>
            {(activeRole !== 'All' || activeTeam !== 'All') && (
              <span className="bg-ycs-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                !
              </span>
            )}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="mb-8 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-medium mb-3">Filter by Role</h4>
              <div className="flex flex-wrap gap-2">
                {allRoles.map((role) => (
                  <FilterOption
                    key={role}
                    label={role}
                    active={activeRole === role}
                    onClick={() => setActiveRole(role)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Filter by Team</h4>
              <div className="flex flex-wrap gap-2">
                {allTeams.map((team) => (
                  <FilterOption
                    key={team}
                    label={team}
                    active={activeTeam === team}
                    onClick={() => setActiveTeam(team)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                setActiveRole('All');
                setActiveTeam('All');
                setSortBy('name');
                setSortDirection('asc');
                setSearchTerm('');
              }}
              className="text-zinc-400 hover:text-white text-sm flex items-center gap-1"
            >
              <GoCheck size={14} /> Reset all filters
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 text-zinc-400 text-sm">
        Showing {filteredPeople.length} of {people.length} people
        {searchTerm && <span> matching &quot;{searchTerm}&quot;</span>}
        {activeRole !== 'All' && <span> in role &quot;{activeRole}&quot;</span>}
        {activeTeam !== 'All' && <span> on team &quot;{activeTeam}&quot;</span>}
      </div>

      {filteredPeople.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-zinc-400 text-lg">No people match your filters</p>
          <button
            onClick={() => {
              setActiveRole('All');
              setActiveTeam('All');
              setSearchTerm('');
            }}
            className="mt-4 text-ycs-pink hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {filteredPeople.length > 0 && (
        <div className="border border-zinc-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-zinc-800 text-zinc-300 text-sm font-medium">
            <button
              onClick={() => handleSort('name')}
              className="col-span-4 md:col-span-3 p-3 text-left hover:bg-zinc-700 transition-colors flex items-center"
            >
              Name <SortIndicator column="name" />
            </button>

            <button
              onClick={() => handleSort('year')}
              className="col-span-2 md:col-span-1 p-3 text-center hover:bg-zinc-700 transition-colors"
            >
              Year <SortIndicator column="year" />
            </button>

            <button
              onClick={() => handleSort('role')}
              className="col-span-3 p-3 text-left hover:bg-zinc-700 transition-colors hidden md:block"
            >
              Role <SortIndicator column="role" />
            </button>

            <button
              onClick={() => handleSort('team')}
              className="col-span-6 md:col-span-5 p-3 text-left hover:bg-zinc-700 transition-colors"
            >
              Team <SortIndicator column="team" />
            </button>
          </div>

          <div className="divide-y divide-zinc-700">
            {filteredPeople.map((person, index) => (
              <div key={index} className="grid grid-cols-12 hover:bg-zinc-800/50 transition-colors">
                <div className="col-span-4 md:col-span-3 p-3 text-white">{person.name}</div>

                <div className="col-span-2 md:col-span-1 p-3 text-center text-zinc-400">
                  {person.year ? `'${person.year.toString().substring(2)}` : '-'}
                </div>

                <div className="col-span-3 p-3 text-zinc-300 hidden md:block">
                  {person.role || '-'}
                </div>

                <div className="col-span-6 md:col-span-5 p-3 text-zinc-300">
                  {person.team || '-'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="md:hidden mt-4">
        {filteredPeople.length > 0 && (
          <div className="text-sm text-zinc-400">
            <p className="mb-1">* Scroll horizontally to see more columns</p>
            <p>* Tap column headers to sort</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const boardMembers = BOARD.filter((person) => person.role !== 'Team Lead');
  const productLeads = BOARD.filter((person) => person.role === 'Team Lead');
  const { isLoggedIn } = useAuth();
  const [guestLoggedIn, setGuestLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  const [developers, setDevelopers] = useState<Member[]>([]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    loadMembers().then(setDevelopers);
  }, []);

  return (
    <PageContainer>
      <SectionContainer>
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Our Team</h1>
        <p className="text-zinc-400 text-xl mb-16 max-w-2xl">
          Meet the talented individuals who make y/cs possible
        </p>
      </SectionContainer>

      <SectionContainer className="mt-8">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Executive Board</h2>
          <p className="text-zinc-400 text-lg mt-2">
            The leadership team that guides y/cs strategy and operations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {boardMembers.map((person, i) => (
            <TeamMember key={i} person={person} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="mt-32">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Product Leads</h2>
          <p className="text-zinc-400 text-lg mt-2">
            The talented individuals who lead our software projects
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {productLeads.map((person, i) => (
            <TeamMember key={i} person={person} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="mt-32">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Our People</h2>
          <p className="text-zinc-400 text-lg mt-2">
            The developers, designers, and contributors who build our products
          </p>
        </div>

        {guestLoggedIn || isLoggedIn ? (
          ////@ts-expect-error BOARD and developers arrays have slightly different Person interfaces but are compatible for display
          <Masthead title="Development Team" people={developers} />
        ) : (
          <div className="bg-zinc-800/30 rounded-lg overflow-hidden p-8 text-center">
            <Container className="max-w-2xl">
              <div className="mb-6">
                <Image
                  src={Wordmark}
                  alt="Login required"
                  width={120}
                  height={120}
                  className="mx-auto opacity-70"
                />
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">Member Directory</h3>
              <p className="text-zinc-300 mb-8">
                This directory is only available to logged-in users.
              </p>
              <Link
                href={`/api/auth/redirect?from=${currentPath}`}
                className="inline-flex items-center justify-center rounded-lg font-bold text-lg bg-ycs-blue hover:bg-ycs-blue/90 text-white py-3 px-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              >
                Log In with Yale
                <GoArrowUpRight className="ml-2" />
              </Link>
              <div className="mt-8 text-zinc-400 text-sm">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector('input');
                    if (input?.value === process.env.NEXT_PUBLIC_GUEST_PASSWORD) {
                      setGuestLoggedIn(true);
                    } else {
                      alert('Incorrect password');
                    }
                  }}
                >
                  Or enter guest password:
                  <input
                    type="password"
                    className="ml-2 bg-zinc-700/50 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-ycs-pink/50"
                    placeholder="Guest password"
                  />
                  <button
                    type="submit"
                    className="ml-2 px-3 py-1 bg-zinc-700 rounded hover:bg-zinc-600 transition-colors"
                  >
                    Submit
                  </button>
                </form>
                <div>Hint: There may be a way around this :)</div>
              </div>
            </Container>
          </div>
        )}
      </SectionContainer>

      <SectionContainer className="mt-32">
        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-lg overflow-hidden border-l-4 border-ycs-pink p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-white text-3xl font-bold mb-4">Interested in joining our team?</h2>
            <p className="text-zinc-300 text-lg mb-8">
              We&apos;re always looking for passionate students to join our development, design, and
              events teams. Applications open each semester.
            </p>

            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-lg font-bold text-lg bg-ycs-pink hover:bg-ycs-pink/90 text-black py-3 px-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              Join y/cs
              <GoArrowUpRight className="ml-2" />
            </Link>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Team;
