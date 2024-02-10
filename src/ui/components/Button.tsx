import { StyleSheet, TouchableOpacity, Text, StyleProp, ViewStyle, GestureResponderEvent } from "react-native";

interface Props {
    title: string;
    disabled?: boolean;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Button = ({ title, disabled, onPress }: Props) => {
    const disabledStyles: StyleProp<ViewStyle> = !disabled ? {} : {
        opacity: 0.5,
    } as ViewStyle;

    return (
        <TouchableOpacity style={[styles.button, disabledStyles]} disabled={disabled} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6D5FFD',
        paddingHorizontal: 40,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 6,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Button;
