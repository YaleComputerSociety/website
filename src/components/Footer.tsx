import { MEDIA } from "../data";

export const Footer = () => {
  const linkProps = {
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <footer className="p-4 mt-16 flex flex-col text-white z-20">
      <div className="text-white text-xl mb-3">Get in touch with us</div>
      <div className="flex justify-center">
        {MEDIA.map((social, i) => (
          <a key={i} href={social.link} {...(social.alt === "Email" ? {} : linkProps)}>
            <img className="h-7 transform transition-transform hover:scale-110 hover:duration-200" style={social.margin} src={social.imageSrc} alt={social.alt} loading="lazy" />
          </a>
        ))}
      </div>
      <div className="mt-4 text-gray-400">Yale Computer Society © 2023</div>
    </footer>
  );
};
