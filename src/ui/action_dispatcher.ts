
export interface ActionCallback {
    execute(payload?: any): Promise<void>;
}

interface RegisteredAction {
    actionName: Actions;
    usecaseCallback: ActionCallback;
}

class Dispatcher {
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

    register(action: Actions, usecaseCallback: ActionCallback) {
        this.registered_actions = this.registered_actions.filter((registeredAction) => registeredAction.actionName !== action);
        this.registered_actions.push({ actionName: action, usecaseCallback })
    }

    async dispatch(action: Actions, payload?: any) {
        const filteredActions = this.registered_actions.filter((registeredAction) => registeredAction.actionName === action);
        for(const registeredAction of filteredActions) {
            try {
                await registeredAction.usecaseCallback.execute(payload);
            } catch(e) {
                console.error(`ERROR in ${action} usecase: `, e);
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
};
