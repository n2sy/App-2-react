
import styles from './NewFilmForm.module.css';

function NewFilmForm() {
    return (
        <form className={styles.form}>
            <div className={styles.control}>
                <label htmlFor='title'>Title </label>
                <input type="text" id="tile"></input>

            </div>
            <div className={styles.control}>
                <label>Year </label>
                <input type="number"></input>

            </div>
            <div className={styles.control}>
                <label htmlFor='title'>Image </label>
                <input type="url" ></input>

            </div>

            <div className={styles.control}>
                <label htmlFor='title'>Description </label>
                <textarea rows="5" ></textarea>
            </div>

            <div className={styles.actions}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewFilmForm;