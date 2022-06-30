
import styles from './FilmItem.module.css';
import Card from './Card';
import { useContext } from 'react';
import { FavContext } from '../store/favorites-context';

function FilmItem(props) {
    const FavCtx = useContext(FavContext);
    //  let contentBtn = '';




    function favHandler() {
        if (!FavCtx.isFavorite(props.oneFilm.id)) {
            FavCtx.addToFavorites(props.oneFilm);
            //  contentBtn = "Remove From Favorites";
        }
        else {
            FavCtx.removeFromFavorites(props.oneFilm.id);
            //   contentBtn = "To Favorites";
        }
    }
    return (
        <Card>
            <div className={styles.item}>
                <div className={styles.image}>
                    <img src={props.oneFilm.image}></img>
                </div>
                <div className={styles.content}>
                    <h3> {props.oneFilm.title}
                    </h3>
                    <strong> {props.oneFilm.year} </strong>
                    <p> {props.oneFilm.description} </p>

                </div>
                <div className={styles.actions}>
                    <button onClick={favHandler}>{FavCtx.isFavorite(props.oneFilm.id) ? 'Remove From Favorites' : 'To Favorites'}</button>
                </div>


            </div>
        </Card>
    )
}

export default FilmItem;