import { useEffect } from "react";
import { Actions, useDispatcher } from "./action_dispatcher";
import { useGlobalContext } from "./GlobalContext";
import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../constants";
import Routes from "./routes";

interface PrivateRoutesProps {
    Component: () => JSX.Element;
}

const NotLoguedInRouteComponent = () => {
    const dispatcher = useDispatcher();

    useEffect(() => {
        const logout = async () => {
            await dispatcher.dispatch(Actions.store_write, {
                key: LOCAL_STORAGE_LOGIN_TOKEN_KEY,
                value: '',
            });
    
            await dispatcher.dispatch(Actions.navigate, {
                route: Routes.LOGIN,
                reset: true,
            });
        };

        logout();
    }, []);
    return <></>;
};

const PrivateRoute = ({ Component }: PrivateRoutesProps) => {
    const { user } = useGlobalContext();
    if (!user.isLoguedIn) return <NotLoguedInRouteComponent />
    return <Component />;
};

export default PrivateRoute;
