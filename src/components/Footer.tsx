import { MEDIA } from '../data'
import './Footer.css'

export const Footer = () => {

    const linkProps = {
        target: "_blank",
        rel: "noreferrer"
    }

    return (
        <footer className="footer">
            <div>
                {
                    MEDIA.map((social, i) => (
                        <a key={i} href={social.link} {...(social.alt === "Email" ? {} : linkProps)}>
                            <img 
                                className='social-logo' 
                                style={social.margin} 
                                src={social.imageSrc} 
                                alt={social.alt} 
                                loading="lazy"
                            />
                        </a>
                    ))
                }
            </div>
            <div style={{ marginTop: '5px' }}>
                Yale Computer Society © 2023
            </div>
        </footer>
    )

}