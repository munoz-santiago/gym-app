import { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";
import { Actions, useDispatcher } from "../../action_dispatcher";
import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../../../constants";
import Routes from "../../routes";

const useNavigateIfLogedIn = (navigation: any) => {
    const dispatcher = useDispatcher();
    const { loginUser, logoudUser } = useGlobalContext();

    useEffect(() => {
        const readAndStoreToken = async () => {
            try {
                const strTokenData = await dispatcher.dispatch(Actions.store_read, { key: LOCAL_STORAGE_LOGIN_TOKEN_KEY });
                const { token } = JSON.parse(strTokenData || '');
                if (!token) throw new Error('invalid token');

                loginUser(token);
                navigation.navigate(Routes.HOME.home);
            } catch (e) {
                await dispatcher.dispatch(Actions.store_write, { key: LOCAL_STORAGE_LOGIN_TOKEN_KEY, value: '' });
                logoudUser();
            }
        };

        readAndStoreToken();
    }, []);
};

export default useNavigateIfLogedIn;
