import { useContext } from "react";
import FilmList from "../components/FilmList";
import { FavContext } from "../store/favorites-context";

function Favorites() {

    const FavCtx = useContext(FavContext);
    return (
        <div>
            {FavCtx.nbFavorites ? <FilmList listOfFilms={FavCtx.favorites}></FilmList> :
                <h3>You don't have favorites yet !</h3>}
        </div >
    )
}

export default Favorites;