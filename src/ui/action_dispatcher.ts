
export interface ActionCallback {
    execute(payload?: any): Promise<any>;
}

type stuffCallbackFunction = (payload?: any) => Promise<any>;

interface RegisteredAction {
    actionName: Actions;
    usecaseCallback: ActionCallback | stuffCallbackFunction;
}

export interface ActionDispatcher {
    register(action: Actions, usecaseCallback: ActionCallback): void;
    dispatch(action: Actions, payload?: any): Promise<void>;
}


class Dispatcher implements ActionDispatcher {
    private registered_actions: RegisteredAction[] = [];
    private static instance: Dispatcher;

    private constructor() {
        if (Dispatcher.instance) return Dispatcher.instance;
        Dispatcher.instance = this;
    }

    static getInstance() {
        if (!Dispatcher.instance) Dispatcher.instance = new Dispatcher();
        return Dispatcher.instance;
    }

    register(action: Actions, usecaseCallback: ActionCallback | stuffCallbackFunction) {
        this.registered_actions = this.registered_actions.filter((registeredAction) => registeredAction.actionName !== action);
        this.registered_actions.push({ actionName: action, usecaseCallback })
    }

    async dispatch(action: Actions, payload?: any) {
        const filteredActions = this.registered_actions.filter((registeredAction) => registeredAction.actionName === action);
        for(const registeredAction of filteredActions) {
            try {
                if ('execute' in registeredAction.usecaseCallback) {
                    return await registeredAction.usecaseCallback.execute(payload);
                }

                return await (registeredAction.usecaseCallback as stuffCallbackFunction)(payload);
                
            } catch(e) {
                console.error(`ERROR in ${action} usecase: `, e);
                return await Promise.resolve();
            }
        }
    }
}

const dispatcher = Dispatcher.getInstance();

export const useDispatcher = () => {
    return dispatcher;
};


export enum Actions {
    logout = 'action--logout',
    login = 'action--login',

    store_write = 'action--store-write',
    store_read = 'action--store-read',
};
