import type { Metadata } from 'next';
import Image from 'next/image';

import MemberDirectory from '@components/site/MemberDirectory';
import { Eyebrow, Shell } from '@components/site/ui';
import { BOARD } from '@data';
import { PRODUCTS, TEAM_HERO } from '@/content/site';

export const metadata: Metadata = {
  title: 'Team · Yale Computer Society',
  description: 'The executive board and product team leads behind y/cs.',
};

const boardMembers = BOARD.filter((person) => person.team === 'Board');
const leads = BOARD.filter((person) => person.role === 'Team Lead');

// One card per product, in the same order as the product carousel.
const teams = PRODUCTS.map((product) => ({
  product,
  leads: leads.filter((lead) => lead.team === product.name),
})).filter((team) => team.leads.length > 0);

const shortYear = (year?: number) => (year ? `'${String(year).slice(2)}` : '');

export default function Team() {
  return (
    <main>
      {/* HERO */}
      <section className="pb-24 pt-20 sm:pb-28 sm:pt-24">
        <Shell className="flex flex-wrap items-center gap-14">
          <div className="min-w-0 flex-[1_1_440px]">
            <Eyebrow>Team</Eyebrow>
            <h1 className="text-[clamp(41px,5.2vw,74px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-cream">
              The people behind y/cs.
            </h1>
            <p className="mt-7 max-w-[520px] text-xl leading-relaxed text-soft">
              A student board runs the organization, and team leads run each product. Together with
              80+ developers and designers, they keep Yale&apos;s most-used student software
              running.
            </p>
            <dl className="mt-10 flex flex-wrap gap-8">
              <div>
                <dd className="text-[37px] font-extrabold text-cream">{boardMembers.length}</dd>
                <dt className="text-sm text-muted">board members</dt>
              </div>
              <div>
                <dd className="text-[37px] font-extrabold text-cream">{leads.length}</dd>
                <dt className="text-sm text-muted">product team leads</dt>
              </div>
            </dl>
          </div>
          <figure className="relative m-0 h-[360px] min-w-0 flex-[1_1_520px] overflow-hidden rounded-[28px] sm:h-[520px]">
            <Image
              src={TEAM_HERO.src}
              alt={TEAM_HERO.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </figure>
        </Shell>
      </section>

      {/* BOARD */}
      <section aria-labelledby="board" className="pb-28">
        <Shell>
          <Eyebrow className="mb-3">2026–27</Eyebrow>
          <h2 id="board" className="mb-9 text-[41px] font-extrabold tracking-[-0.02em] text-cream">
            Executive board
          </h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {boardMembers.map((person) => (
              <li
                data-reveal
                key={person.name}
                className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-panel"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#262626] to-[#1A1A1A]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 pb-5 pt-4">
                  <h3 className="text-lg font-extrabold text-cream">{person.name}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-muted">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* PRODUCT LEADS */}
      <section aria-labelledby="leads" className="bg-panel-deep py-28">
        <Shell>
          <Eyebrow className="mb-3">Product teams</Eyebrow>
          <h2 id="leads" className="mb-10 text-[41px] font-extrabold tracking-[-0.02em] text-cream">
            Team leads
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map(({ product, leads: teamLeads }) => (
              <li
                data-reveal
                key={product.id}
                className="flex flex-col gap-5 rounded-[22px] border border-white/[0.08] bg-[#181818] p-6"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-white">
                    <Image
                      src={product.logo}
                      alt=""
                      className="h-8 w-8 object-contain"
                      sizes="32px"
                    />
                  </span>
                  <div>
                    <h3 className="text-[19.5px] font-extrabold text-cream">{product.name}</h3>
                    <p className="text-[12.5px] text-muted">{product.short}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {teamLeads.map((lead) => (
                    <li key={lead.name}>
                      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#262626] to-[#1A1A1A]">
                        <Image
                          src={lead.image}
                          alt={lead.name}
                          fill
                          sizes="(min-width: 1024px) 140px, (min-width: 640px) 25vw, 45vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2.5 text-[14px] font-semibold leading-snug text-cream">
                        {lead.name}
                      </p>
                      {lead.year && (
                        <p className="mt-0.5 font-mono text-xs text-muted">
                          {shortYear(lead.year)}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      {/* MEMBER DIRECTORY (login-gated, carried over from the previous team page) */}
      <section aria-labelledby="directory" className="py-28">
        <Shell>
          <h2
            id="directory"
            className="mb-2 text-[30px] font-extrabold tracking-[-0.02em] text-cream"
          >
            Member directory
          </h2>
          <p className="mb-8 text-lg text-muted">
            The developers, designers and contributors who build our products.
          </p>
          <MemberDirectory />
        </Shell>
      </section>
    </main>
  );
}
