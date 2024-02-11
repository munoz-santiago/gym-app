import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Button from "../../../components/Button";
import { useDispatcher, Actions } from "../../../action_dispatcher";

const ProfileTab = () => {
    const dispatcher = useDispatcher();

    const handlePressLogoutButton = () => {
        dispatcher.dispatch(Actions.logout);
    };

    return (
        <View style={{ alignItems: 'center', height: '100%', justifyContent: 'space-around' }}>
            <Text>Profile screen</Text>
            <View style={{ width: '50%' }}>
                <Button
                    title="Sign out"
                    sufix={<MaterialIcons name="logout" size={24} color="white" />}
                    onPress={handlePressLogoutButton}
                />
            </View>
        </View>
    );
};

export default ProfileTab;
