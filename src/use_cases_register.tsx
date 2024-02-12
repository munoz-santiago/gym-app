import { useNavigation } from '@react-navigation/native';

import { Actions, useDispatcher } from './ui/action_dispatcher';

import LogoutUseCase from './use_cases/logout';
import LoginUseCase from './use_cases/login';
import ReadFromStore from './use_cases/read_from_store copy';
import WriteInStore from './use_cases/write_in_store';

const UseCasesRegister = () => {
    const navigator = useNavigation();
    const dispatcher = useDispatcher();

    const logoutUseCase = new LogoutUseCase(navigator, dispatcher);
    const loginUseCase = new LoginUseCase(navigator, dispatcher);
    const readFromStore = new ReadFromStore();
    const writeInStore = new WriteInStore();

    dispatcher.register(Actions.logout, logoutUseCase);
    dispatcher.register(Actions.login, loginUseCase);
    dispatcher.register(Actions.store_read, readFromStore);
    dispatcher.register(Actions.store_write, writeInStore);

    return <></>;
};



export default UseCasesRegister;
