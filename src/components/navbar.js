import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from './navbar.module.css';
import { FavContext } from '../store/favorites-context';
import { LoginContext } from '../store/login-context';

function NavBar() {
    const FavC = useContext(FavContext);

    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();



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
                        <li><Link to="/favorites"><button type="button" className="btn btn-primary">
                            Favorites <span className="badge bg-secondary">{FavC.nbFavorites}</span>
                        </button></Link></li>
                        <li ><button onClick={() => {
                            LogCtx.seDeconnecter(); navigate('/')
                        }} className="btn btn-primary">Logout</button> </li>


                    </ul>
                </nav>
            </header >
        )
    else
        return (
            <header className={classes.header}>
                <div className={classes.logo}>Film Shop</div>
                <nav>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </nav>
            </header >
        )

}

export default NavBar;