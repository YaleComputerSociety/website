import './App.css';
import { ABOUTUS, BOARD, Project, PROJECTS } from './data';
import logo from './assets/ycs_black.png'

import email from './assets/email.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import people from './assets/people.jpeg'
import { SectionTitle } from './SectionTitle.component';
import { Fragment, ReactNode } from 'react';

type ProjectCardProps = {
    project: Project
}

type CardWrapperProps = {
    children: ReactNode
}

const CardWrapper = ({children}: CardWrapperProps) => (
    <div className='card'>
        {children}
    </div>
)

const ProjectCard = ({project}: ProjectCardProps) => (
    <div className={project.link ? 'project-card' : 'card'}>
        <div style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={project.image} loading='lazy' alt={project.name} style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '15px' }}/>
        </div>
        <strong style={{ marginTop: '10px' }}>
            {project.name}
        </strong>
    </div>
)

function App() {
    return (
        <div className="App">
            <div style={{ backgroundColor: '#1f232b' }}>
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
            <SectionTitle header='Products' subheader='Building software to improve the Yale experience with technology'/>
            <div className='card-grid'>
                {
                    PROJECTS.map((project, i) => (
                        <Fragment key={i}>
                            {
                                project.link ?
                                <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ProjectCard project={project}/>
                                </a> :
                                <ProjectCard project={project}/>
                            }
                        </Fragment>
                    ))
                }
            </div>
            <SectionTitle header='Board' subheader='Meet the team overseeing the general growth of YCS'/>
            <div className="card-grid">
                {
                    BOARD.slice(0, 7).map((board_member, i) => (
                        <CardWrapper key={i}>
                            <img 
                                src={board_member.image === "" ? people : board_member.image} 
                                alt={board_member.name} 
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '200px', maxHeight: '200px' }}
                            />
                            <strong style={{ margin: '1rem 0' }}>{board_member.name}</strong>
                            <div>
                                {board_member.role.map((role, i) => (
                                    <div style={{ backgroundColor: 'lightgrey', color: '#1f232b', padding: '2.5px 5px 2.5px 5px', borderRadius: '5px' }} key={i}>
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </CardWrapper>
                    ))
                }
            </div>
            <SectionTitle header='Project Leads' subheader='Meet the people taking our projects to greater heights'/>
            <div className="card-grid">
                {
                    BOARD.slice(7).map((board_member, i) => (
                        <CardWrapper key={i}>
                            <img 
                                src={board_member.image === "" ? people : board_member.image} 
                                alt={board_member.name} 
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '200px', maxHeight: '200px' }}
                            />
                            <strong style={{ margin: '1rem 0' }}>{board_member.name}</strong>
                            <div>
                                {board_member.role.map((role, i) => (
                                    <div style={{ backgroundColor: 'lightgrey', color: '#1f232b', padding: '2.5px 5px 2.5px 5px', borderRadius: '5px' }} key={i}>
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </CardWrapper>
                    ))
                }
            </div>
            <footer style={{ backgroundColor: '#1f232b', padding: '15px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                <div>
                <a href="mailto:yalecomputersociety@gmail.com">
                    <img src={email} className="social-logo" style={{ marginRight: '10px' }} alt="Email"/>
                </a>
                <a href="https://www.facebook.com/yalecompsociety/" target="_blank" rel="noreferrer">
                    <img className="social-logo" style={{ margin: '0 10px' }} src={facebook} alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com/yalecompsociety/" target="_blank" rel="noreferrer">
                    <img className="social-logo" style={{ marginLeft: '10px' }} src={instagram} alt="Instagram"/>
                </a>
                </div>
                <div style={{ marginTop: '5px' }}>
                    Copyright 2023
                </div>
            </footer>
        </div>
    );
}

export default App;
