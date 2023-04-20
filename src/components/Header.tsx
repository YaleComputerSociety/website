import { Link } from 'react-router-dom'
import ycs_logo from '../assets/ycs_logo_dark_512.png'
import './Header.css'

export const Header = () => {

    return (
        <div className='header'>
            <Link to="/">
                <img src={ycs_logo} alt="YCS Logo" className='logo'/>
            </Link>
            <div style={{ float: 'right', display: 'flex', alignItems: 'center', justifyContent: 'end', height: '100%', paddingRight: '2.5vw' }}>
                <Link className='header-link' to="/team">
                    Team
                </Link>
                <Link className='header-link' to="/products">
                    Products
                </Link>
            </div>
        </div>
    )

}