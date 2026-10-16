import type { Metadata } from 'next';
import Image from 'next/image';

import { UNDER_NAV_CLASS } from '@components/site/brand';
import { CtaPanel, Eyebrow, PhotoGrid, PillLink, SectionTitle, Shell } from '@components/site/ui';
import {
  CALENDAR_SUBSCRIBE_URL,
  EVENT_GALLERY,
  EVENT_TYPES,
  EVENTS_HERO,
  INSTAGRAM_URL,
  PAST_EVENTS,
} from '@/content/site';

export const metadata: Metadata = {
  title: 'Events · Yale Computer Society',
  description:
    'Demo days, hackathons, workshops, recruiting events and socials, open to every Yale student.',
};

const CalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
  </svg>
);

export default function Events() {
  return (
    <main>
      {/* HERO */}
      <section className={`relative flex min-h-[640px] flex-col justify-end ${UNDER_NAV_CLASS}`}>
        <Image
          src={EVENTS_HERO.src}
          alt={EVENTS_HERO.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[50%_45%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.2) 80%), linear-gradient(0deg, #0A0A0A 0%, rgba(10,10,10,0) 45%)',
          }}
        />
        <Shell className="relative">
          <div className="max-w-[760px] pb-20 pt-44">
            <Eyebrow>Events</Eyebrow>
            <h1 className="text-[clamp(41px,5.6vw,78px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-cream">
              There&apos;s always something happening.
            </h1>
            <p className="mt-6 max-w-[560px] text-xl leading-relaxed text-soft">
              Demo days, hackathons, workshops with industry engineers, recruiting events and
              socials. Most events are open to every Yale student, members or not.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PillLink href={CALENDAR_SUBSCRIBE_URL}>
                <CalendarIcon />
                Add our calendar
              </PillLink>
              <PillLink href={INSTAGRAM_URL} variant="outline">
                Follow on Instagram
              </PillLink>
            </div>
          </div>
        </Shell>
      </section>

      {/* EVENT TYPES */}
      <section aria-labelledby="types" className="pb-28 pt-14">
        <Shell>
          <Eyebrow>What we run</Eyebrow>
          <SectionTitle className="mb-10 max-w-[760px]">
            Five kinds of events, all semester long.
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {EVENT_TYPES.map((type) => (
              <article
                data-reveal
                key={type.name}
                className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-panel"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={type.photo.src}
                    alt={type.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 pb-6 pt-5">
                  <h3 className="mb-2 text-[19.5px] font-extrabold text-cream">{type.name}</h3>
                  <p className="text-[14px] leading-normal text-soft">{type.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      {/* GALLERY */}
      <section aria-labelledby="gallery" className="bg-panel-deep py-28">
        <Shell>
          <h2
            id="gallery"
            className="mb-10 text-[37px] font-extrabold tracking-[-0.02em] text-cream"
          >
            From past events
          </h2>
          <PhotoGrid photos={EVENT_GALLERY} rowHeight={260} />
        </Shell>
      </section>

      {/* PAST EVENTS */}
      <section aria-labelledby="past" className="py-28">
        <Shell>
          <h2 id="past" className="mb-7 text-[30px] font-extrabold tracking-[-0.02em] text-cream">
            Past events
          </h2>
          <ul className="border-t border-white/[0.12]">
            {PAST_EVENTS.map((event) => (
              <li
                key={event.title}
                className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-white/[0.12] py-5"
              >
                <span className="w-[140px] font-mono text-sm text-muted">{event.date}</span>
                <span className="min-w-0 flex-[1_1_320px] text-[18px] font-bold text-cream">
                  {event.title}
                </span>
                <span className="w-[160px] text-sm text-muted">{event.where}</span>
                <span className="rounded-full bg-white/[0.08] px-2.5 py-1 text-xs font-semibold text-[#D8D4CC]">
                  {event.type}
                </span>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <Shell>
          <CtaPanel
            title="Never miss an event."
            body="Add the y/cs calendar or follow us on Instagram. We post every event there first."
          >
            <PillLink href={CALENDAR_SUBSCRIBE_URL} variant="dark">
              Add to Google Calendar
            </PillLink>
            <PillLink href={INSTAGRAM_URL} variant="outline-dark">
              Follow on Instagram
            </PillLink>
          </CtaPanel>
        </Shell>
      </section>
    </main>
  );
}
