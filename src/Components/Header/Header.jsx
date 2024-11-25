import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           
            <nav >
                <span>My Website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/about">About</Link>
                <Link to="/contract">Contract</Link>
                
                
              
              
            </nav>
        </div>
    );
};

export default Header;