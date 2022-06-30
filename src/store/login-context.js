import { createContext, useState } from "react";


export const LoginContext = createContext(
    {
        isLogged: false,
        seConnecter: () => { },
        seDeconnecter: () => { }
    }
)

function LoginContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function seConnecter(email, pwd) {
        if (email === "nidhal@gmail.com" && pwd === "azerty") {
            localStorage.setItem('logged', '1');

            setIsLoggedIn(true);
            console.log(isLoggedIn);
            return true;
        }
        else {
            localStorage.setItem('logged', '0');
            setIsLoggedIn(false);
            return false;
        }

    }

    function seDeconnecter() {
        localStorage.setItem('logged', '0');
        setIsLoggedIn(false);
    }


    const context = {
        isLogged: isLoggedIn,
        seConnecter: seConnecter,
        seDeconnecter: seDeconnecter
    }
    return (
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;