import './Nav.css';
import Link from './Link.jsx';

const Header = (props) => {
    return (
        <div className="header-container">
            <Link title="Home" href="/" />
            <Link title="Find a user" href="/users" />
            {/* <Link title="View user details" href="/user" />
            <Link title="View repo details" href="/repo" /> */}
        </div>
    );
}

export default Header;