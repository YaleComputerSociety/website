'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight, GoCalendar, GoLocation, GoClockFill } from 'react-icons/go';
import { motion } from 'framer-motion';
import Wordmark from '@assets/wordmark.png';
import { EVENTS } from '@data'; // Adjust the import path as necessary
// Event Card Component for Past Events
const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format the date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.div
      className="bg-zinc-800/50 rounded-lg overflow-hidden group cursor-pointer"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          className={`object-cover w-full h-full transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {event.tags &&
                event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-ycs-pink/80 text-white px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <h3 className="text-white text-lg font-bold">{event.title}</h3>
            <div className="flex items-center text-zinc-300 text-sm">
              <span>{formatDate(event.date)}</span>
              <span className="mx-2">•</span>
              <span>{event.location.split(',')[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Upcoming Event Card Component
const UpcomingEventCard = ({ event }) => {
  // Format the date for display
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-zinc-800/30 border-l-4 border-ycs-blue rounded-lg p-5 flex flex-col md:flex-row gap-6">
      <div className="relative h-32 md:h-auto md:w-40 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full"
          width={160}
          height={120}
        />
      </div>

      <div className="flex-1">
        <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex items-center text-zinc-300">
            <GoCalendar className="mr-2 text-ycs-blue" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-zinc-300">
            <GoClockFill className="mr-2 text-ycs-blue" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-zinc-300">
            <GoLocation className="mr-2 text-ycs-blue" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-zinc-400 text-sm mb-4">{event.description}</p>
        <Link
          href={`/events/${event.id}`}
          className="text-ycs-blue hover:text-ycs-blue/80 flex items-center text-sm font-medium"
        >
          View Details <GoArrowUpRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

// Empty state component for when there are no upcoming events
const NoUpcomingEvents = () => {
  return (
    <div className="bg-zinc-800/30 rounded-lg overflow-hidden">
      <div className="p-8 text-center">
        <div className="mb-6">
          <Image
            src={Wordmark} // Replace with an actual illustration
            alt="No upcoming events"
            width={300}
            height={200}
            className="mx-auto"
          />
        </div>
        <h3 className="text-white text-xl font-bold mb-2">No upcoming events scheduled</h3>
        <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
          We're currently planning our next round of events. Check back soon or subscribe to our
          calendar to be notified when new events are announced.
        </p>
        <Link
          href="https://calendar.google.com/calendar/embed?src=t6isudodqcpb2uepck99jmjt3o%40group.calendar.google.com&ctz=America%2FNew_York"
          target="_blank"
          className="inline-flex items-center bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <GoCalendar className="mr-2" />
          Add to Calendar
        </Link>
      </div>
    </div>
  );
};

// TabButton Component
const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium text-sm md:text-base rounded-lg transition-colors ${
      active ? 'bg-ycs-pink text-white' : 'text-zinc-400 hover:text-white'
    }`}
  >
    {children}
  </button>
);

// Main Events Component
const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [filter, setFilter] = useState('all');

  // Separate events into upcoming and past based on date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to beginning of day for accurate comparison

  const upcomingEvents = EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date ascending

  const pastEvents = EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < today;
  }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending (most recent first)

  // Get unique tag categories from past events
  const allTags = [...new Set(pastEvents.flatMap((event) => event.tags || []))].sort();

  // Filter past events by tag
  const filteredPastEvents =
    filter === 'all'
      ? pastEvents
      : pastEvents.filter((event) => event.tags && event.tags.includes(filter));

  return (
    <div className="mb-20 px-6 pt-24">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Events</h1>
        <p className="text-zinc-400 text-xl mb-16 max-w-2xl">
          From workshops to socials, hackathons to tech talks, we host dozens of events each
          semester.
        </p>
      </section>

      {/* Tab navigation */}
      <section className="max-w-7xl mx-auto">
        <div className="flex space-x-2 mb-8">
          <TabButton active={activeTab === 'upcoming'} onClick={() => setActiveTab('upcoming')}>
            Upcoming Events
          </TabButton>
          <TabButton active={activeTab === 'past'} onClick={() => setActiveTab('past')}>
            Past Events
          </TabButton>
          <Link
            href="https://calendar.google.com/calendar/embed?src=t6isudodqcpb2uepck99jmjt3o%40group.calendar.google.com&ctz=America%2FNew_York"
            target="_blank"
            className="ml-auto flex items-center bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
          >
            <GoCalendar className="mr-2" />
            Add to Calendar
          </Link>
        </div>

        {/* Upcoming Events Tab */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => <UpcomingEventCard key={event.id} event={event} />)
            ) : (
              <NoUpcomingEvents />
            )}
          </div>
        )}

        {/* Past Events Tab */}
        {activeTab === 'past' && (
          <>
            {/* Filters for past events */}
            <div className="mb-8 overflow-x-auto pb-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                    filter === 'all'
                      ? 'bg-ycs-pink text-white'
                      : 'bg-zinc-800 text-zinc-300 hover:text-white'
                  }`}
                >
                  All Events
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                      filter === tag
                        ? 'bg-ycs-pink text-white'
                        : 'bg-zinc-800 text-zinc-300 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Past events grid */}
            {filteredPastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="bg-zinc-800/30 rounded-lg p-8 text-center">
                <h3 className="text-white text-xl font-bold mb-2">No events found</h3>
                <p className="text-zinc-400">
                  No past events match your current filter. Try selecting a different category.
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-lg p-8 border-l-4 ">
          <div className="max-w-xl">
            <h2 className="text-white text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-zinc-300 mb-6">
              Sign up for our newsletter to receive updates about upcoming events and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-2 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-ycs-blue/50"
              />
              <button className="bg-ycs-pink hover:bg-ycs-pink/90 text-white px-6 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
