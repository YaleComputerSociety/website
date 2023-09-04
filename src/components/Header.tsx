import { Link } from "react-router-dom";
import "./Header.css";
import Alert from '@mui/material/Alert';

export const Header = () => {
  return (
    <div className="header">
    
      
      <Link className="logo" to="/">
        &lt;y/cs&gt;
      </Link>
     
      <div className="pagesList">
      <Link className="header-link" to="/events">
          Apply Today!
      </Link>
      <Link className="header-link" to="/about">
          About
      </Link>
      
      
      <Link className="header-link" to="/products">
        Development
      </Link>
      <Link className="header-link" to="/events">
        Events
      </Link>
      <Link className="header-link" to="/team">
        Team
      </Link>
      
      <Link className="header-link" target="_blank" to="https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h">
        Feedback
      </Link>
      </div>
    </div>
  );
};
