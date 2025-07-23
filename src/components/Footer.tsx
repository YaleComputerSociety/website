import Link from 'next/link';
import { cloneElement } from 'react';
import { FaInstagram, FaGithub, FaRegEnvelope } from 'react-icons/fa';

interface FooterIconProps {
  link: string;
  ariaLabel: string;
  icon: React.ReactElement;
}

const FooterIcon: React.FC<FooterIconProps> = (props: FooterIconProps) => {
  const resizedIcon = cloneElement(props.icon, { size: 40 });

  return (
    <Link
      href={props.link}
      className="h-7 transform transition-transform hover:scale-110 hover:duration-200"
      aria-label={props.ariaLabel}
    >
      {resizedIcon}
    </Link>
  );
};

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={`flex flex-col text-white z-20 justify-normal items-center ${className}`}>
      <div className="text-white text-xl mb-1">Get in touch with us</div>
      <div className="flex justify-center gap-6 p-3">
        <FooterIcon
          link="mailto:yalecomputersociety@gmail.com"
          ariaLabel="Email"
          icon={<FaRegEnvelope />}
        />
        <FooterIcon
          link="https://github.com/yalecomputersociety"
          ariaLabel="Github"
          icon={<FaGithub />}
        />
        <FooterIcon
          link="https://www.instagram.com/yalecomputersociety/"
          ariaLabel="Instagram"
          icon={<FaInstagram />}
        />
      </div>
      <div className="mt-4 text-gray-400 mb-6">
        Yale Computer Society © {new Date().getFullYear()}
      </div>
    </footer>
  );
};
