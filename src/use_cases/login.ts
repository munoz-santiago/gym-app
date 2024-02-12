import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../constants";
import { ActionCallback, ActionDispatcher, Actions } from "../ui/action_dispatcher";
import Routes from "../ui/routes";

interface Props {
    token: string;
}

class LoginUseCase implements ActionCallback {
    constructor(private navigator: any, private dispatcher: ActionDispatcher) {
        if (!navigator) throw new Error('navigator cant be null');
        if (!dispatcher) throw new Error('Dispatcher cant be null');
    }

    async execute({ token }: Props): Promise<void> {
        await this.dispatcher.dispatch(Actions.store_write, {
            key: LOCAL_STORAGE_LOGIN_TOKEN_KEY,
            value: JSON.stringify({ token }),
        })
        this.navigator.navigate(Routes.HOME);
    }
    
}

export default LoginUseCase;
