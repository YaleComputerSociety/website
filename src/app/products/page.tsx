import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { CtaPanel, Eyebrow, PillLink, Shell, StatRow } from '@components/site/ui';
import { GITHUB_URL, PRODUCTS } from '@/content/site';

export const metadata: Metadata = {
  title: 'Products · Yale Computer Society',
  description:
    'CourseTable, Yalies, YaleMeals, ymeets and more: software Yale uses every day, built by students.',
};

const PRODUCT_STATS = [
  { value: '20,000+', label: 'people use y/cs apps' },
  { value: '7', label: 'products live, 1 in development' },
  { value: '80+', label: 'student developers & designers' },
  { value: '100%', label: 'open source' },
];

const FAQ = [
  {
    q: "What if I'm not a Yale student?",
    a: 'Some apps have a guest mode or only need a Gmail account. Apps that handle sensitive Yale data require Yale CAS login.',
  },
  {
    q: "What if I'm an incoming student?",
    a: "You'll get access once you have Yale CAS login. Sometimes that takes until the start of the semester, so hang tight.",
  },
];

export default function Products() {
  return (
    <main>
      {/* HERO */}
      <section className="pb-16 pt-24 sm:pt-28">
        <Shell>
          <Eyebrow>Products</Eyebrow>
          <h1 className="max-w-[980px] text-[clamp(44px,6vw,88px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-cream">
            Software Yale uses every day, built by students.
          </h1>
          <p className="mt-7 max-w-[640px] text-xl leading-relaxed text-soft">
            From picking courses to finding a lab, y/cs teams design, build and run the tools the
            Yale community relies on. Every product is open source and maintained by student
            developers.
          </p>
          <div className="mt-9">
            <PillLink href={GITHUB_URL} variant="outline">
              View our GitHub
            </PillLink>
          </div>
          <div className="mt-16">
            <StatRow stats={PRODUCT_STATS} />
          </div>
        </Shell>
      </section>

      {/* JUMP ROW */}
      <nav aria-label="Jump to a product" className="pb-24">
        <Shell>
          <ul className="grid grid-cols-2 gap-1.5 rounded-3xl border border-white/[0.08] bg-[#121212] p-2 sm:grid-cols-4 xl:grid-cols-8">
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <Link
                  href={`#${product.id}`}
                  className="flex min-h-[64px] items-center gap-3 rounded-2xl px-3.5 py-2.5 text-cream transition-colors duration-200 hover:bg-[#1C1C1C] xl:flex-col xl:justify-center xl:gap-2 xl:px-2 xl:py-3.5 xl:text-center"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-white">
                    <Image
                      src={product.logo}
                      alt=""
                      className="h-[26px] w-[26px] object-contain"
                      sizes="26px"
                    />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5 xl:items-center">
                    <span className="text-[15px] font-bold leading-tight">{product.name}</span>
                    <span className="text-xs leading-tight text-muted">{product.short}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Shell>
      </nav>

      {/* PRODUCT ROWS */}
      <section aria-label="All products">
        <Shell className="flex flex-col gap-8">
          {PRODUCTS.map((product, i) => (
            <article
              data-reveal
              key={product.id}
              id={product.id}
              className={`flex scroll-mt-28 flex-wrap overflow-hidden rounded-[28px] border border-white/[0.08] bg-panel ${
                i % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="h-[300px] min-w-0 flex-[1.5_1_520px] bg-[#1C1C1C] px-6 pt-6 sm:h-[460px] sm:px-8 sm:pt-8">
                <div className="relative h-full w-full overflow-hidden rounded-t-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src={product.shot}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    placeholder="blur"
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-[1_1_360px] flex-col justify-between gap-7 p-8 sm:px-12 sm:py-11">
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-white">
                      <Image
                        src={product.logo}
                        alt=""
                        className="h-[34px] w-[34px] object-contain"
                        sizes="34px"
                      />
                    </span>
                    <div>
                      <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-cream">
                        {product.name}
                      </h2>
                      <p className="mt-1 font-mono text-xs text-muted">{product.tag}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[17px] leading-relaxed text-soft">{product.desc}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="border-t border-white/10 pt-4">
                    <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      Team leads
                    </p>
                    <p className="text-[15px] text-cream">{product.leads}</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <PillLink href={product.url} size="sm">
                      {product.cta}
                    </PillLink>
                    <PillLink href={GITHUB_URL} variant="outline" size="sm">
                      Source on GitHub
                    </PillLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Shell>
      </section>

      {/* PITCH CTA */}
      <section className="py-24">
        <Shell>
          <CtaPanel
            title="Want to build the next one?"
            body="Join a product team, or bring an idea for something Yale is missing. Every product here started as a student's pitch."
          >
            <PillLink href="/join" variant="dark">
              Get involved
            </PillLink>
          </CtaPanel>
        </Shell>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="pb-28">
        <Shell>
          <h2 id="faq" className="mb-7 text-[32px] font-extrabold tracking-[-0.02em] text-cream">
            Common questions
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-[20px] border border-white/[0.08] bg-panel px-8 py-7"
              >
                <h3 className="mb-2.5 text-[19px] font-bold text-cream">{item.q}</h3>
                <p className="leading-relaxed text-soft">{item.a}</p>
              </div>
            ))}
          </div>
        </Shell>
      </section>
    </main>
  );
}
