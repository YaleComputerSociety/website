import { SectionTitle } from "../components/SectionTitle"
import logo from '../assets/ycs_black.png'
import { ABOUTUS } from "../data"
import { Fragment } from "react"
import { CardWrapper } from "../components/CardWrapper"

export const Home = () => {

    return (
        <Fragment>
            <div style={{ backgroundColor: '#1f232b', paddingTop: '10vh' }}>
                <img src={logo} alt={"Yale Computer Society logo"} style={{ maxHeight: '200px', pointerEvents: 'none' }} />
            </div>
            <div style={{ backgroundColor: '#1f232b', color: 'white', padding: '0 0 2rem 0', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <h3>Students promoting tech &amp; entrepreneurship at Yale University</h3>
                <div style={{ display: 'flex' }}>
                    <div className='mailchimp-btn' onClick={() => window.open("https://yalecompsociety.us7.list-manage.com/subscribe/post?u=83b3abd7222875600c46cf8de&amp;id=155d6c54ff", "_blank")} >
                        Subscribe To Our Mailchimp
                    </div>
                </div>
            </div>
            <SectionTitle header='About Us' subheader='What We Do'/>
            <div className='card-grid'>
                {
                    ABOUTUS.map((about, i) => (
                        <CardWrapper key={i}>
                            <img loading='lazy' src={about.icon} alt={about.name} style={{ width: '50px', height: '50px' }} />
                            <strong style={{ margin: '1rem 0' }}>{about.name}</strong>
                            <p>{about.description}</p>
                        </CardWrapper>
                    ))
                }
            </div>
        </Fragment>
    )

}