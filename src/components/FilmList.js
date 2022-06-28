
import FilmItem from './FilmItem';
import styles from './FilmList.module.css';


function FilmList(props) {
    return (
        <div>
            <ol className={styles.list}>
                {props.listOfFilms.map((f) => {
                    return <FilmItem oneFilm={f}></FilmItem>
                })}
            </ol>

        </div>
    )
}

export default FilmList;