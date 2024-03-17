import { createContext, useState, useContext } from "react";

interface Contexto {
    user: {
        isLoguedIn: boolean;
        token: string;
    }

    loginUser: (token: string) => void;
    logoudUser: () => void;
}

const Context = createContext<Contexto>({} as Contexto);

const USER_INITIAL_STATE = {
    isLoguedIn: false,
    token: '',
};

export const GlobalContextProvider = ({ children }: { children: any; }) => {
    const [state, setState] = useState({
        user: USER_INITIAL_STATE,

        loginUser: (token: string) => {
            setState((prevState) => ({
                ...prevState,
                user: {
                    isLoguedIn: true,
                    token,
                },
            }));
        },
        logoudUser: () => {
            setState((prevState) => ({ ...prevState, user: USER_INITIAL_STATE }));
        }
    });

    return (
        <Context.Provider value={state}>
           {children}
        </Context.Provider>
    );
};

export const useGlobalContext = () => useContext(Context);
