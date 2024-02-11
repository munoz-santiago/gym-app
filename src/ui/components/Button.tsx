import { StyleSheet, TouchableOpacity, Text, StyleProp, ViewStyle, GestureResponderEvent } from "react-native";

interface Props {
    title: string;
    disabled?: boolean;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    sufix?: React.ReactElement;
    prefix?: React.ReactElement;
}

const Button = ({ title, disabled, onPress, sufix, prefix }: Props) => {
    const disabledStyles: StyleProp<ViewStyle> = !disabled ? {} : {
        opacity: 0.5,
    } as ViewStyle;

    return (
        <TouchableOpacity style={[styles.button, disabledStyles]} disabled={disabled} onPress={onPress}>
            {prefix}
            <Text style={styles.title}>{title}</Text>
            {sufix}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6D5FFD',
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 6,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Button;
