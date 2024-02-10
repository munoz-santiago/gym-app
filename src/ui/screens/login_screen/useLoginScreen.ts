import Routes from "../../routes";
import { useEffect, useState } from "react";

const useLoginScreen = (navigation: any) => {
    const [isValidForm, setIsValidForm] = useState(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        setIsValidForm(!!(username && password));
    }, [username, password]);

    const handleChangeUsername = (val: string) => setUsername(val.trim());
    const handleChangePassword = (val: string) => setPassword(val.trim());

    const handlePressLoginButton = () => {
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
