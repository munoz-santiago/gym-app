import { useNavigation } from '@react-navigation/native';

import { ActionCallback, Actions, useDispatcher } from './ui/action_dispatcher';
import Routes from './ui/routes';

const UseCasesRegister = () => {
    const dispatcher = useDispatcher();
    const navigator = useNavigation();

    const logoutUseCase = new LogoutUseCase(navigator);
    dispatcher.register(Actions.logout, logoutUseCase);

    return <></>;
};

class LogoutUseCase implements ActionCallback {
    constructor(private navigator: any) {}

    async execute(): Promise<void> {
        this.navigator.reset({ index: 0, routes: [{ name: Routes.LOGIN }] });
    }
    
}

export default UseCasesRegister;
