import type { Metadata } from 'next';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

import { CtaPanel, Eyebrow, PillLink, SectionTitle, Shell, StatRow } from '@components/site/ui';
import {
  APPLICATIONS_OPEN,
  APPLY_URL,
  CONTACT_EMAIL,
  JOIN_FAQ,
  JOIN_HERO,
  JOIN_ROLES,
  JOIN_STATS,
  JOIN_STEPS,
} from '@/content/site';

export const metadata: Metadata = {
  title: 'Join · Yale Computer Society',
  description:
    "Join Yale's largest collective of student developers, designers and CS enthusiasts. General membership is open to everyone, year-round.",
};

const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

const StatusChip = () => (
  <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm text-soft">
    <span className="relative flex h-2 w-2" aria-hidden="true">
      {APPLICATIONS_OPEN && (
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
      )}
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${
          APPLICATIONS_OPEN ? 'bg-emerald-400' : 'bg-muted'
        }`}
      />
    </span>
    {APPLICATIONS_OPEN
      ? 'Applications open · reviewed on a rolling basis'
      : 'Applications are currently closed'}
  </p>
);

export default function Join() {
  return (
    <main>
      {/* HERO */}
      <section className="pb-20 pt-20 sm:pt-24">
        <Shell className="flex flex-wrap items-center gap-14">
          <div className="min-w-0 flex-[1_1_460px]">
            <StatusChip />
            <h1 className="text-[clamp(44px,5.6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-cream">
              Come build with <span className="text-accent">y/cs</span>.
            </h1>
            <p className="mt-7 max-w-[540px] text-xl leading-relaxed text-soft">
              We are Yale&apos;s largest collective of software developers, product designers and
              computer science enthusiasts. Everyone who applies becomes a member.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {APPLICATIONS_OPEN && (
                <PillLink href={APPLY_URL}>
                  Apply now <GoArrowUpRight aria-hidden="true" />
                </PillLink>
              )}
              <PillLink href="#process" variant="outline">
                How it works
              </PillLink>
            </div>
          </div>
          <figure className="relative m-0 h-[380px] min-w-0 flex-[1_1_480px] overflow-hidden rounded-[28px] sm:h-[540px]">
            <Image
              src={JOIN_HERO.src}
              alt={JOIN_HERO.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </figure>
        </Shell>
      </section>

      {/* STATS */}
      <section aria-label="y/cs at a glance" className="pb-28">
        <Shell>
          <StatRow stats={JOIN_STATS} />
        </Shell>
      </section>

      {/* ROLES */}
      <section aria-labelledby="roles" className="pb-32">
        <Shell>
          <Eyebrow>01 — Ways to join</Eyebrow>
          <SectionTitle className="mb-5 max-w-[820px]">
            <span id="roles">Three ways in. Pick your pace.</span>
          </SectionTitle>
          <p className="mb-14 max-w-[640px] text-lg leading-relaxed text-soft">
            Start as a general member, then apply to a product team or Catalyst whenever you&apos;re
            ready. You can grow from one to the next.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {JOIN_ROLES.map((role) => (
              <article
                data-reveal
                key={role.title}
                className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-panel"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={role.photo.src}
                    alt={role.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-8 pb-8 pt-7">
                  <p className="mb-3 font-mono text-[13px] text-accent">{role.path}</p>
                  <h3 className="mb-2.5 text-2xl font-extrabold text-cream">{role.title}</h3>
                  <p className="leading-relaxed text-soft">{role.body}</p>
                  <p className="mt-5 text-sm text-muted">{role.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        aria-labelledby="process-title"
        className="scroll-mt-20 bg-panel-deep py-32"
      >
        <Shell>
          <Eyebrow>02 — How it works</Eyebrow>
          <SectionTitle className="mb-5 max-w-[820px]">
            <span id="process-title">Short and sweet.</span>
          </SectionTitle>
          <p className="mb-14 max-w-[640px] text-lg leading-relaxed text-soft">
            General membership is open year-round. Product team and Catalyst applications open at
            the start of each semester, and we keep the process as short as possible.
          </p>
          <ol className="grid gap-5 lg:grid-cols-3">
            {JOIN_STEPS.map((step, i) => (
              <li
                data-reveal
                key={step.title}
                className="relative rounded-3xl border border-white/[0.08] bg-panel p-8 sm:p-10"
              >
                <p className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, '0')} / {String(JOIN_STEPS.length).padStart(2, '0')}
                </p>
                <h3 className="mb-4 mt-6 text-[26px] font-extrabold tracking-[-0.02em] text-cream">
                  {step.title}
                </h3>
                <div className="space-y-4 leading-relaxed text-soft">
                  {step.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Shell>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="py-32">
        <Shell className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>03 — FAQ</Eyebrow>
            <SectionTitle>
              <span id="faq">Common questions.</span>
            </SectionTitle>
            <p className="mt-6 max-w-[400px] text-lg leading-relaxed text-soft">
              Still curious?{' '}
              <a
                href={CONTACT_HREF}
                className="text-accent underline-offset-4 transition-colors hover:text-[#FFD2BF] hover:underline"
              >
                Email us
              </a>{' '}
              and we&apos;ll get back to you.
            </p>
          </div>
          <dl className="border-t border-white/[0.12]">
            {JOIN_FAQ.map((item) => (
              <div data-reveal key={item.q} className="border-b border-white/[0.12] py-8">
                <dt className="mb-3 text-[21px] font-bold tracking-[-0.01em] text-cream">
                  {item.q}
                </dt>
                <dd className="space-y-3 text-[17px] leading-relaxed text-soft">
                  {item.a.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Shell>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <Shell>
          {APPLICATIONS_OPEN ? (
            <CtaPanel
              title="Ready to build with us?"
              body="Join a community of developers, designers and tech enthusiasts. General membership applications are open year-round."
            >
              <PillLink href={APPLY_URL} variant="dark">
                Apply now <GoArrowUpRight aria-hidden="true" />
              </PillLink>
              <PillLink href={CONTACT_HREF} variant="outline-dark">
                Contact us
              </PillLink>
            </CtaPanel>
          ) : (
            <CtaPanel
              title="Applications are closed for now."
              body="Check back at the start of next semester, or reach out to learn more."
            >
              <PillLink href={CONTACT_HREF} variant="dark">
                Contact us
              </PillLink>
            </CtaPanel>
          )}
        </Shell>
      </section>
    </main>
  );
}
