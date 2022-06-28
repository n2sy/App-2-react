import { Link } from "react-router-dom";
import classes from './navbar.module.css';

function NavBar() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Film Shop</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/allfilms">All Films</Link></li>
                    <li><Link to="/newfilm">Add New Film</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;