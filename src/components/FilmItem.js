
import styles from './FilmItem.module.css';

function FilmItem(props) {
    return (
        <div>
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
                <button>To Favorites</button>
            </div>



        </div>
    )
}

export default FilmItem;