// import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../constants";
// import { ActionCallback, ActionDispatcher, Actions } from "../ui/action_dispatcher";
// import Routes from "../ui/routes";

// class LogoutUseCase implements ActionCallback {
//     constructor(private navigator: any, private dispatcher: ActionDispatcher) {}

//     async execute(): Promise<void> {
//         await this.dispatcher.dispatch(Actions.store_write, { key: LOCAL_STORAGE_LOGIN_TOKEN_KEY, value: '' });
//         this.navigator.reset({ index: 0, routes: [{ name: Routes.LOGIN }] });
//     }
    
// }

// export default LogoutUseCase;
