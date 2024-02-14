import { ActionCallback } from "../ui/action_dispatcher";

interface Props {
    key: string;
}

class ReadFromStore implements ActionCallback {
    async execute(payload: Props): Promise<string | null> {
        // TODO :: Pendiente!!! Se puede usar SQLite and Realm
        return null;
    }
    
}

export default ReadFromStore;
