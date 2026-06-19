import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import google from '@assets/companies/google.png';
import meta from '@assets/companies/meta.png';
import netflix from '@assets/companies/netflix.png';
import microsoft from '@assets/companies/microsoft.png';
import amazon from '@assets/companies/amazon.png';
import bloomberg from '@assets/companies/bloomberg.png';
import nvidia from '@assets/companies/nvidia.png';
import roblox from '@assets/companies/roblox.png';
import databricks from '@assets/companies/databricks.png';
import morganStanley from '@assets/companies/morgan-stanley.png';
import janeStreet from '@assets/companies/jane-street.png';
import mckinsey from '@assets/companies/mckinsey.png';
import bcg from '@assets/companies/bcg.png';
import linkedin from '@assets/companies/linkedin.png';
import yCombinator from '@assets/companies/y-combinator.png';
import capitalOne from '@assets/companies/capital-one.png';
import openai from '@assets/companies/openai.png';
import plaid from '@assets/companies/plaid.png';
import coinbase from '@assets/companies/coinbase.png';
import redhat from '@assets/companies/red-hat.png';
import salesforce from '@assets/companies/salesforce.png';
import { SectionContainer } from './Container';

// Every logo is auto-sized to ~equal optical area (see `logoHeight`) so wide and square marks
// read at a similar size; `scale` fine-tunes an individual logo on top of that.
// `keepWhite` keeps a dark logo white on hover (its true color would vanish on the black bg).
// `color` shows the logo in its real colors instead of forcing it white (e.g. Red Hat's red hat).
type CompanyLogo = {
  name: string;
  logo: StaticImageData;
  keepWhite?: boolean;
  color?: boolean;
  scale?: number;
};

// Equal-area sizing: derive each logo's height from its aspect ratio so a wide wordmark and a
// square mark occupy a similar footprint. Clamped so nothing gets too thin or too tall.
const TARGET_AREA = 6000;
const MIN_H = 36;
const MAX_H = 60;

const logoHeight = ({ logo, scale = 1 }: CompanyLogo) => {
  const aspect = logo.width / logo.height;
  const base = Math.sqrt(TARGET_AREA / aspect);
  // `scale` applies after the clamp so an individual logo can be nudged past it.
  return Math.round(Math.min(MAX_H, Math.max(MIN_H, base)) * scale);
};

const ALUMNI_LOGOS: CompanyLogo[] = [
  { name: 'Google', logo: google },
  { name: 'Meta', logo: meta },
  { name: 'Netflix', logo: netflix },
  { name: 'Microsoft', logo: microsoft },
  { name: 'Amazon', logo: amazon },
  { name: 'Bloomberg', logo: bloomberg, keepWhite: true },
  { name: 'NVIDIA', logo: nvidia },
  { name: 'Roblox', logo: roblox },
  { name: 'Databricks', logo: databricks, keepWhite: true },
  { name: 'Morgan Stanley', logo: morganStanley },
  { name: 'Jane Street', logo: janeStreet },
  { name: 'McKinsey', logo: mckinsey, keepWhite: true },
  { name: 'BCG', logo: bcg },
  { name: 'LinkedIn', logo: linkedin },
  { name: 'Y Combinator', logo: yCombinator },
  { name: 'Capital One', logo: capitalOne },
  { name: 'OpenAI', logo: openai, keepWhite: true },
  { name: 'Plaid', logo: plaid, keepWhite: true },
  { name: 'Coinbase', logo: coinbase },
  { name: 'Red Hat', logo: redhat, color: true },
  { name: 'Salesforce', logo: salesforce, color: true, scale: 1.3 },
];

const AlumniCompanies = () => {
  // Duplicate the set so the -50% translate loops seamlessly and never runs out.
  const loop = [...ALUMNI_LOGOS, ...ALUMNI_LOGOS];

  return (
    <SectionContainer>
      <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
        Where Our Members Land
      </h2>

      {/* Contained auto-scrolling marquee: infinite seamless loop (never pauses), fades at the
          edges, respects reduced motion. */}
      <div className="marquee-mask relative overflow-hidden py-4">
        <div className="flex w-max animate-marquee items-center">
          {loop.map((company, i) => {
            // Forced-white silhouette by default; `color` logos keep their real colors.
            const filter = company.color
              ? ''
              : `brightness-0 invert ${company.keepWhite ? '' : 'hover:brightness-100 hover:invert-0'}`;
            return (
              <Image
                key={i}
                src={company.logo}
                alt={`${company.name} logo`}
                aria-hidden={i >= ALUMNI_LOGOS.length}
                style={{ height: logoHeight(company), width: 'auto' }}
                className={`mr-16 shrink-0 object-contain opacity-50 transition duration-300 hover:opacity-100 ${filter}`}
              />
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AlumniCompanies;
