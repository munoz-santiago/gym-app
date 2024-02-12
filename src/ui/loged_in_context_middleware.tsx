import { useEffect, useState } from "react";
import { Actions, useDispatcher } from "./action_dispatcher";
import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../constants";
import { useGlobalContext } from "./GlobalContext";

interface Props {
    children: any;
    onError: (error?: string) => void;
    onSuccess: (token: string) => void;
    context: any;
}

const LogedInContextMiddleware = ({ children, onError, onSuccess, context }: Props) => {
    const [isDone, setIsDone] = useState(false);
    const dispatcher = useDispatcher();
    const { user } = context;

    useEffect(() => {
        const loadUserDataFromStorage = async () => {
            try {
                const userData = await dispatcher.dispatch(Actions.store_read, { key: LOCAL_STORAGE_LOGIN_TOKEN_KEY });
                if (!userData) throw new Error('Undefined stored key');

                const { token } = JSON.parse(userData);
                if (!token)  throw new Error('Undefined user token');

                setIsDone(true);
                onSuccess(token);
            } catch (e) {
                onError();
            }
        };

        loadUserDataFromStorage();

    }, []);

    if (!isDone || !user.isLoguedIn) return <></>;
    return children;
};

export default LogedInContextMiddleware;
