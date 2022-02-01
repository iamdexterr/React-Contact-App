import './Header.css';
import { Link } from 'react-router-dom';
const Header =()=>{

    return(
        <div className="header">
            <Link to='/'>
            <h1>Contact Manager</h1>
            </Link>
        </div>
    );
}

export default Header;