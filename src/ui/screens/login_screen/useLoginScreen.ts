import { useEffect, useState } from "react";
import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../../../constants";
import { Actions, useDispatcher } from "../../action_dispatcher";
import Routes from "../../routes";

const useLoginScreen = (navigation: any) => {
    const dispatcher = useDispatcher();

    const [isValidForm, setIsValidForm] = useState(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        setIsValidForm(!!(username && password));
    }, [username, password]);

    const handleChangeUsername = (val: string) => setUsername(val.trim());
    const handleChangePassword = (val: string) => setPassword(val.trim());

    const handlePressLoginButton = async () => {
        await dispatcher.dispatch(Actions.store_write, {
            key: LOCAL_STORAGE_LOGIN_TOKEN_KEY,
            value: JSON.stringify({
                token: 'Burned Login token :)'
            }),
        });
        navigation.navigate(Routes.HOME);
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
