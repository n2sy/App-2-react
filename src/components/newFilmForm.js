
import { useState } from 'react';
import styles from './NewFilmForm.module.css';

function NewFilmForm() {
    const [formInput, setFormInput] = useState({
        title: '',
        year: '',
        image: '',
        description: ''

    })

    function titleHandler(e) { // e = event
        e.preventDefault();
        console.log(e.target.value);
        setFormInput(prev => {
            return {
                ...prev,
                title: e.target.value
            }
        }
        );
        //console.log(formInput);

    }

    function yearHandler(e) {
        e.preventDefault();
        console.log(e.target.value);
        setFormInput(prev => {
            return {
                ...prev,
                year: e.target.value
            }
        })
    }

    function imageHandler(e) {
        e.preventDefault();
        console.log(e.target.value);
        setFormInput(prev => {
            return {
                ...prev,
                image: e.target.value
            }
        });

    }

    function descHandler(e) {
        e.preventDefault();
        console.log(e.target.value);
        setFormInput(prev => {
            return {
                ...prev,
                description: e.target.value
            }
        });
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formInput);
    }


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor='title'>Title </label>
                <input type="text" id="tile" value={formInput.title} onChange={titleHandler}></input>

            </div>
            <div className={styles.control}>
                <label>Year </label>
                <input type="number" value={formInput.year} onChange={yearHandler}></input>

            </div>
            <div className={styles.control}>
                <label htmlFor='title'>Image </label>
                <input type="url" value={formInput.image} onChange={imageHandler}></input>

            </div>

            <div className={styles.control}>
                <label htmlFor='title'>Description </label>
                <textarea rows="5" value={formInput.description} onChange={descHandler} ></textarea>
            </div>

            <div className={styles.actions}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewFilmForm;