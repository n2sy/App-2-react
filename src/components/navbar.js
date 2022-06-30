import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from './navbar.module.css';
import { FavContext } from '../store/favorites-context';
import { LoginContext } from '../store/login-context';

function NavBar() {
    const FavC = useContext(FavContext);
    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();
    function logoutHandler() {
        LogCtx.seDeconnecter();
        navigate('/login');

    }

    if (LogCtx.isLogged)
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
                        <li><button onClick={logoutHandler}>Logout</button></li>

                    </ul>
                </nav>
            </header>
        )
    else {
        return (
            <header className={classes.header}>
                <div className={classes.logo}>Film Shop</div>
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>

                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;