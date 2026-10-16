'use client';

import { useEffect, useState, SetStateAction } from 'react';
import Link from 'next/link';
import {
  GoArrowDown,
  GoArrowUp,
  GoArrowUpRight,
  GoCheck,
  GoFilter,
  GoSearch,
  GoX,
} from 'react-icons/go';

import { useAuth } from '@components/AuthContext';
import { loadMembers, Member } from '@data';

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

  const allRoles = [
    'All',
    ...Array.from(new Set(people.flatMap((person) => person.role.split(', ')))),
  ].sort();
  const allTeams = [
    'All',
    ...Array.from(new Set(people.flatMap((person) => person.team.split(', ')))),
  ].sort();

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
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
        active ? 'bg-accent text-accent-ink' : 'bg-white/[0.06] text-soft hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-panel p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search people..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/[0.06] text-cream pl-10 pr-4 py-2 rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <GoSearch className="absolute left-3 top-2.5 text-muted" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-muted hover:text-cream"
              >
                <GoX />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white/[0.06] text-cream px-4 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <GoFilter />
            <span>Filters</span>
            {(activeRole !== 'All' || activeTeam !== 'All') && (
              <span className="bg-accent text-accent-ink text-xs rounded-full w-5 h-5 flex items-center justify-center">
                !
              </span>
            )}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="mb-8 p-4 rounded-2xl border border-white/[0.08] bg-[#1C1C1C]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-cream font-medium mb-3">Filter by Role</h4>
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
              <h4 className="text-cream font-medium mb-3">Filter by Team</h4>
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
              className="text-muted hover:text-cream text-sm flex items-center gap-1"
            >
              <GoCheck size={14} /> Reset all filters
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 text-muted text-sm">
        Showing {filteredPeople.length} of {people.length} people
        {searchTerm && <span> matching &quot;{searchTerm}&quot;</span>}
        {activeRole !== 'All' && <span> in role &quot;{activeRole}&quot;</span>}
        {activeTeam !== 'All' && <span> on team &quot;{activeTeam}&quot;</span>}
      </div>

      {filteredPeople.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted text-lg">No people match your filters</p>
          <button
            onClick={() => {
              setActiveRole('All');
              setActiveTeam('All');
              setSearchTerm('');
            }}
            className="mt-4 text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {filteredPeople.length > 0 && (
        <div className="border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-[#1C1C1C] text-soft text-sm font-medium">
            <button
              onClick={() => handleSort('name')}
              className="col-span-4 md:col-span-3 p-3 text-left hover:bg-white/10 transition-colors flex items-center"
            >
              Name <SortIndicator column="name" />
            </button>

            <button
              onClick={() => handleSort('year')}
              className="col-span-2 md:col-span-1 p-3 text-center hover:bg-white/10 transition-colors"
            >
              Year <SortIndicator column="year" />
            </button>

            <button
              onClick={() => handleSort('role')}
              className="col-span-3 p-3 text-left hover:bg-white/10 transition-colors hidden md:block"
            >
              Role <SortIndicator column="role" />
            </button>

            <button
              onClick={() => handleSort('team')}
              className="col-span-6 md:col-span-5 p-3 text-left hover:bg-white/10 transition-colors"
            >
              Team <SortIndicator column="team" />
            </button>
          </div>

          <div className="divide-y divide-white/10">
            {filteredPeople.map((person, index) => (
              <div
                key={index}
                className="grid grid-cols-12 hover:bg-white/[0.03] transition-colors"
              >
                <div className="col-span-4 md:col-span-3 p-3 text-cream">{person.name}</div>

                <div className="col-span-2 md:col-span-1 p-3 text-center text-muted">
                  {person.year ? `'${person.year.toString().substring(2)}` : '-'}
                </div>

                <div className="col-span-3 p-3 text-soft hidden md:block">{person.role || '-'}</div>

                <div className="col-span-6 md:col-span-5 p-3 text-soft">{person.team || '-'}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="md:hidden mt-4">
        {filteredPeople.length > 0 && (
          <div className="text-sm text-muted">
            <p className="mb-1">* Scroll horizontally to see more columns</p>
            <p>* Tap column headers to sort</p>
          </div>
        )}
      </div>
    </div>
  );
};

/** Member directory, visible after Yale login or the guest password (same gate as before the redesign). */
export default function MemberDirectory() {
  const { isLoggedIn } = useAuth();
  const [guestLoggedIn, setGuestLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [developers, setDevelopers] = useState<Member[]>([]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    loadMembers().then(setDevelopers);
  }, []);

  if (guestLoggedIn || isLoggedIn) {
    return <Masthead title="Development Team" people={developers} />;
  }

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-panel px-6 py-12 text-center">
      <div className="mx-auto max-w-xl">
        <h3 className="mb-3 text-2xl font-extrabold text-cream">Member directory</h3>
        <p className="mb-8 text-soft">
          This directory is only available to logged-in Yale students.
        </p>
        <Link
          href={`/api/auth/redirect?from=${currentPath}`}
          className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent px-7 text-[16px] font-bold text-accent-ink transition-transform hover:-translate-y-0.5"
        >
          Log in with Yale
          <GoArrowUpRight />
        </Link>
        <form
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted"
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
          <label htmlFor="guest-password">Or enter guest password:</label>
          <input
            id="guest-password"
            type="password"
            placeholder="Guest password"
            className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-cream focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <button
            type="submit"
            className="rounded-lg bg-white/10 px-3 py-1.5 text-cream hover:bg-white/15"
          >
            Submit
          </button>
        </form>
        <p className="mt-3 text-sm text-muted">Hint: There may be a way around this :)</p>
      </div>
    </div>
  );
}
