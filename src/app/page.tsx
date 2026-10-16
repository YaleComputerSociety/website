import Image from 'next/image';
import Link from 'next/link';

import { UNDER_NAV_CLASS } from '@components/site/brand';
import ProductCarousel from '@components/site/ProductCarousel';
import TypedHeadline from '@components/site/TypedHeadline';
import {
  Eyebrow,
  LogoRow,
  PhotoGrid,
  PillLink,
  SectionTitle,
  Shell,
  StatRow,
} from '@components/site/ui';
import {
  ALUMNI,
  GITHUB_URL,
  HERO_PHOTO,
  LIFE_PHOTOS,
  SPONSORS,
  STATS,
  WAYS_IN,
} from '@/content/site';

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className={`relative flex min-h-[760px] flex-col justify-end sm:min-h-[860px] ${UNDER_NAV_CLASS}`}
      >
        <Image
          src={HERO_PHOTO.src}
          alt={HERO_PHOTO.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[60%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.78) 38%, rgba(10,10,10,0.15) 75%), linear-gradient(0deg, #0A0A0A 0%, rgba(10,10,10,0) 40%)',
          }}
        />
        <Shell className="relative">
          <div className="max-w-[760px] pt-[200px]">
            <TypedHeadline />
            <p className="mt-5 text-[clamp(24px,2.6vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-cream">
              Yale&apos;s premier tech organization and developer community.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PillLink href="/join">Get involved</PillLink>
              <PillLink href="/sponsors" variant="outline">
                Partner with us →
              </PillLink>
            </div>
          </div>
          <div className="mt-20 sm:mt-24">
            <StatRow stats={STATS} />
          </div>
        </Shell>
      </section>

      {/* SPONSORS + WHERE MEMBERS LAND */}
      <section
        aria-label="Sponsors and where our members land"
        className="border-y border-white/[0.08] py-14"
      >
        <Shell className="flex flex-col gap-12">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            <p className="w-[200px] shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Backed by
            </p>
            <LogoRow logos={SPONSORS} minWidth={100} />
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            <p className="w-[200px] shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Where our members land
            </p>
            <LogoRow logos={ALUMNI} minWidth={100} />
          </div>
        </Shell>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 sm:py-36">
        <Shell>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[680px]">
              <Eyebrow>01 — What we ship</Eyebrow>
              <SectionTitle>Built by students. Used by all of Yale.</SectionTitle>
            </div>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:text-[#FFD2BF]"
            >
              See all products on GitHub →
            </Link>
          </div>
          <ProductCarousel />
        </Shell>
      </section>

      {/* LIFE AT Y/CS */}
      <section id="life" className="bg-panel-deep py-28 sm:py-32">
        <Shell>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <Eyebrow>02 — Life at y/cs</Eyebrow>
              <SectionTitle>More than a club. A crew.</SectionTitle>
            </div>
            <p className="max-w-[420px] text-lg leading-relaxed text-soft">
              Demo days, launch booths, a black-tie gala, hackathons and late nights in the CEID.
              This is where Yale&apos;s builders find each other.
            </p>
          </div>
          <PhotoGrid photos={LIFE_PHOTOS} />
        </Shell>
      </section>

      {/* WAYS IN */}
      <section className="py-28 sm:py-36">
        <Shell>
          <Eyebrow>03 — Open to all skill levels</Eyebrow>
          <SectionTitle className="max-w-[820px]">
            Wherever you&apos;re starting from, there&apos;s a place for you.
          </SectionTitle>
          <p className="mb-14 mt-5 max-w-[640px] text-[19px] leading-relaxed text-soft">
            No experience required. Whether you&apos;ve never written a line of code or you&apos;ve
            already shipped to production, y/cs meets you where you are and helps you grow.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {WAYS_IN.map((way) => (
              <article
                data-reveal
                key={way.path}
                className="overflow-hidden rounded-3xl border border-white/[0.08] bg-panel"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={way.photo.src}
                    alt={way.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                <div className="p-9">
                  <p className="font-mono text-sm text-accent">{way.path}</p>
                  <h3 className="mb-2.5 mt-4 text-[26px] font-extrabold text-cream">{way.title}</h3>
                  <p className="text-[17px] leading-relaxed text-soft">{way.body}</p>
                  <p className="mt-6 text-sm text-muted">{way.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      {/* DUAL CTA */}
      <section className="pb-28">
        <Shell className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[28px] bg-accent p-10 text-accent-ink sm:p-14">
            <p className="font-mono text-[13px] uppercase tracking-[0.14em]">For students</p>
            <h2 className="mb-3.5 mt-4 text-[clamp(34px,3.4vw,44px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              Build with us this semester.
            </h2>
            <p className="mb-8 text-lg leading-relaxed">General membership is open year-round.</p>
            <PillLink href="/join" variant="dark">
              Apply to join
            </PillLink>
          </div>
          <div className="rounded-[28px] bg-paper p-10 text-[#141414] sm:p-14">
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-[#5C574F]">
              For companies
            </p>
            <h2 className="mb-3.5 mt-4 text-[clamp(34px,3.4vw,44px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              Meet Yale&apos;s strongest builders.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[#3D3A35]">
              Tech talks, recruiting events and a direct line to students who already ship
              production software.
            </p>
            <PillLink href="/sponsors" variant="dark">
              Become a sponsor
            </PillLink>
          </div>
        </Shell>
      </section>
    </main>
  );
}
