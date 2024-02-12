import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionCallback } from "../ui/action_dispatcher";

interface Props {
    key: string;
    value: string;
}

class WriteInStore implements ActionCallback {
    async execute(payload: Props): Promise<void> {
        await AsyncStorage.setItem(payload.key, payload.value);
    }
    
}

export default WriteInStore;
