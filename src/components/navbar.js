import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './navbar.module.css';
import { FavContext } from '../store/favorites-context';

function NavBar() {
    const FavC = useContext(FavContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Film Shop</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/allfilms">All Films</Link></li>
                    <li><Link to="/newfilm">Add New Film</Link></li>
                    <li><Link to="/favorites"><button type="button" class="btn btn-primary">
                        Favorites <span class="badge bg-secondary">{FavC.nbFavorites}</span>
                    </button></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;