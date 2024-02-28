import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Button from "../../../components/Button";
import { useDispatcher, Actions } from "../../../action_dispatcher";
import { LOCAL_STORAGE_LOGIN_TOKEN_KEY } from "../../../../constants";
import Routes from "../../../routes";

const ProfileTab = ({ navigator }: any) => {
    const dispatcher = useDispatcher();

    const handlePressLogoutButton = async () => {
        await dispatcher.dispatch(Actions.store_write, {
            key: LOCAL_STORAGE_LOGIN_TOKEN_KEY,
            value: '',
        });
        navigator.reset({ index: 0, routes: [{ name: Routes.LOGIN }] });
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
