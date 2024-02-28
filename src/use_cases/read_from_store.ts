import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionCallback } from "../ui/action_dispatcher";

interface Props {
    key: string;
}

class ReadFromStore implements ActionCallback {
    async execute(payload: Props): Promise<string | null> {
        return await AsyncStorage.getItem(payload.key);
    }
    
}

export default ReadFromStore;
