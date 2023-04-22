import { CardWrapper } from "../components/CardWrapper"
import { SectionTitle } from "../components/SectionTitle"
import { BOARD } from "../data"

export const Team = () => {

    return (
        <div style={{ paddingTop: '10vh' }}> 
            <SectionTitle header='Board' subheader='Meet the team overseeing the general growth of YCS'/>
            <div className="card-grid">
                {
                    BOARD.slice(0, 7).map((board_member, i) => (
                        <CardWrapper key={i}>
                            <img 
                                src={board_member.image}
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
                                src={board_member.image}
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
        </div>
    )

}