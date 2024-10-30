import { Link } from "react-router-dom";
import "./home.css"
const Header = () => {
    return (
        <div>
                <nav>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                </nav>
        </div>
    );
};

export default Header;