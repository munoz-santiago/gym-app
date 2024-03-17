import { useEffect, useState } from "react";
import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../../../constants";
import { Actions, useDispatcher } from "../../action_dispatcher";
import Routes from "../../routes";
import { useGlobalContext } from "../../GlobalContext";

const useLoginScreen = (navigation: any) => {
    const dispatcher = useDispatcher();
    const { loginUser } = useGlobalContext();

    const [isValidForm, setIsValidForm] = useState(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        setIsValidForm(!!(username && password));
    }, [username, password]);

    const handleChangeUsername = (val: string) => setUsername(val.trim());
    const handleChangePassword = (val: string) => setPassword(val.trim());

    const handlePressLoginButton = async () => {
        const token = 'Burned Login token :)';
        await dispatcher.dispatch(Actions.store_write, {
            key: LOCAL_STORAGE_LOGIN_TOKEN_KEY,
            value: JSON.stringify({ token }),
        });
        loginUser(token);

        navigation.navigate(Routes.HOME.home);
    };

    return {
        state: {
            disableLoginButton: !isValidForm,
            username,
            password,
        },
        actions: {
            handleChangeUsername,
            handleChangePassword,
            handlePressLoginButton,
        },
    };
};

export default useLoginScreen;
