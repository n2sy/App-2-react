
import styles from './FilmItem.module.css';
import Card from './Card';

function FilmItem(props) {
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
                    <button>To Favorites</button>
                </div>


            </div>
        </Card>
    )
}

export default FilmItem;