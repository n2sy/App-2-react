
import { useContext, useEffect, useRef } from 'react';
import styles from './Login.module.css';
import Card from './Card';
import { LoginContext } from '../store/login-context';
import { useNavigate } from 'react-router-dom';
import FavoritesContextProvider from '../store/favorites-context';

function Login() {
    const refLogin = useRef();
    const refPwd = useRef();

    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        let repValue = LogCtx.seConnecter(refLogin.current.value, refPwd.current.value);
        if (repValue)
            navigate('/');

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