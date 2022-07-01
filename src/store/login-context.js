
import { createContext } from 'react';
import { useState } from 'react';

export const LoginContext = createContext(
    {
        isLogged: false,
        seConnecter: () => { },
        seDeconnecter: () => { }
    }
);

function LoginContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function seConnecter(login, pwd) {
        if (login === "nidhal@gmail.com" && pwd === "azerty") { setIsLoggedIn(true); return true; }
        else { setIsLoggedIn(false); return false; }
    }

    function seDeconnecter() {
        setIsLoggedIn(false);
    }

    const MyContext = {
        isLogged: isLoggedIn,
        seConnecter: seConnecter,
        seDeconnecter: seDeconnecter
    }
    return (
        <LoginContext.Provider value={MyContext}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;
