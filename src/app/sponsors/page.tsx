import type { Metadata } from 'next';
import Image from 'next/image';

import { CtaPanel, Eyebrow, PillLink, SectionTitle, Shell, StatRow } from '@components/site/ui';
import {
  CONTACT_EMAIL,
  PARTNERSHIP_TYPES,
  SPONSOR_HERO,
  SPONSOR_STATS,
  SPONSOR_STRIP,
} from '@/content/site';

export const metadata: Metadata = {
  title: 'Sponsors · Yale Computer Society',
  description:
    'Partner with y/cs to meet Yale students who already build and run production software.',
};

const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

export default function Sponsors() {
  return (
    <main>
      {/* HERO */}
      <section className="pb-28 pt-20 sm:pt-24">
        <Shell className="flex flex-wrap items-center gap-14">
          <div className="min-w-0 flex-[1_1_460px]">
            <Eyebrow>Partnerships · 2026–27</Eyebrow>
            <h1 className="text-[clamp(44px,5.6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-cream">
              Recruit the students who already ship.
            </h1>
            <p className="mt-7 max-w-[540px] text-xl leading-relaxed text-soft">
              y/cs members build and run software used by 20,000+ people at Yale. Partner with us to
              put your team in front of them — early.
            </p>
            <div className="mt-10">
              <PillLink href={CONTACT_HREF}>Contact us</PillLink>
            </div>
          </div>
          <figure className="relative m-0 h-[380px] min-w-0 flex-[1_1_480px] overflow-hidden rounded-[28px] sm:h-[560px]">
            <Image
              src={SPONSOR_HERO.src}
              alt={SPONSOR_HERO.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover object-left"
            />
            <figcaption className="absolute bottom-5 right-5 rounded-full bg-ink/80 px-4 py-2.5 text-sm text-cream backdrop-blur-sm">
              Your logo, at every y/cs launch on campus
            </figcaption>
          </figure>
        </Shell>
      </section>

      {/* STATS */}
      <section aria-label="Reach" className="pb-28">
        <Shell>
          <div className="border-b border-white/[0.14]">
            <StatRow stats={SPONSOR_STATS} />
          </div>
        </Shell>
      </section>

      {/* PHOTO STRIP */}
      <section aria-label="y/cs events" className="pb-28">
        <Shell className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {SPONSOR_STRIP.map((photo) => (
            <figure
              data-reveal
              key={photo.alt}
              className="relative m-0 h-[200px] overflow-hidden rounded-[20px] sm:h-[260px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                placeholder="blur"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </Shell>
      </section>

      {/* WHAT PARTNERSHIP LOOKS LIKE */}
      <section aria-labelledby="looks" className="pb-28 pt-12">
        <Shell>
          <Eyebrow>What partnership looks like</Eyebrow>
          <SectionTitle className="mb-14 max-w-[760px]">
            Real rooms. Real engineers. Real hires.
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-3">
            {PARTNERSHIP_TYPES.map((type) => (
              <article
                data-reveal
                key={type.title}
                className="overflow-hidden rounded-3xl border border-white/[0.08] bg-panel"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={type.photo.src}
                    alt={type.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                <div className="px-8 pb-8 pt-7">
                  <h3 className="mb-2 text-2xl font-extrabold text-cream">{type.title}</h3>
                  <p className="leading-relaxed text-soft">{type.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pb-32">
        <Shell>
          <CtaPanel
            title="Interested in partnering with y/cs?"
            body="Reach out and we'll talk through how we can work together."
          >
            <PillLink href={CONTACT_HREF} variant="dark">
              Contact us
            </PillLink>
          </CtaPanel>
        </Shell>
      </section>
    </main>
  );
}
