import { ActionCallback } from "../ui/action_dispatcher";

interface Props {
    key: string;
    value: string;
}

class WriteInStore implements ActionCallback {
    async execute(payload: Props): Promise<void> {
        // TODO :: Pendiente!!! Se puede usar SQLite and Realm
    }
    
}

export default WriteInStore;
