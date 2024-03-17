import { StyleSheet, View, Text } from "react-native";

import TextBoxControl from "../../components/TextBoxControl";
import Button from "../../components/Button";
import useLoginScreen from "./useLoginScreen";
import useNavigateIfLogedIn from "./useNavigateIfLogedIn";

const LoginScreen = ({ navigation }: any) => {
    const { state, actions } = useLoginScreen(navigation);
    useNavigateIfLogedIn(navigation);

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Sign in to GymApp</Text>
                <TextBoxControl label="Username" value={state.username} onChangeText={actions.handleChangeUsername} />
                <TextBoxControl label="Password" value={state.password} onChangeText={actions.handleChangePassword} secureTextEntry  />
                <View style={{ marginBottom: 30 }} />
                <Button title="Sign in" disabled={state.disableLoginButton} onPress={actions.handlePressLoginButton} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
    },
    formContainer: {
        padding: 30
    },
    formTitle: {
        marginBottom: 30,
        fontSize: 33,
        color: '#394452',
    },
});

export default LoginScreen;
