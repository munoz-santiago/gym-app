import { createContext, useState, useContext } from "react";
import LogedInContextMiddleware from "./loged_in_context_middleware";

const initialContextState = {
    isInitialized: false,
    hasErrorWhenLoading: false,
    errorMessage: '',

    user: {
        isLoguedIn: false,
        token: null,
    }
};

const Context = createContext(initialContextState);


export const GlobalContextWrapper = ({ children }: { children: any; }) => {
    const [state, setState] = useState(initialContextState);

    const handleLoadingMiddlewareError = (error?: string) => {
        setState({
            ...initialContextState,
            hasErrorWhenLoading: true,
            errorMessage: error || 'Error loading application.',
        });
    };

    const handleSuccessLoginMiddleware = (token: string) => {
        setState((prevState: any) => {
            return ({
                ...prevState,
                user: {
                    isLoguedIn: true,
                    token,
                }
            });
        });
    };

    console.info('LogedInContextMiddleware --> ', state)

    return (
        <Context.Provider value={state}>
            {!state.hasErrorWhenLoading ? (
                <LogedInContextMiddleware onError={handleLoadingMiddlewareError} onSuccess={handleSuccessLoginMiddleware} context={state}>
                    {children}
                </LogedInContextMiddleware>
            ) : (
                <>
                    {children}
                </>
            )}
        </Context.Provider>
    );
};

export const useGlobalContext = () => useContext(Context);
