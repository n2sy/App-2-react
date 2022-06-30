
import { useRef } from 'react';
import styles from './Login.module.css';
import Card from './Card';

function Login() {
    const refLogin = useRef();
    const refPwd = useRef();

    function submitHandler(event) {
        event.preventDefault();
        console.log(refLogin.current.value, refPwd.current.value);
    }
    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>E-mail address </label>
                    <input type="text" id="tile" ref={refLogin}></input>

                </div>
                <div className={styles.control}>
                    <label>Password </label>
                    <input type="text" ref={refPwd}></input>
                </div>



                <div className={styles.actions}>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </Card>
    )
}

export default Login;