import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

interface Props extends TextInputProps {
    label: string;
}

const TextBoxControl = ({ label, secureTextEntry, ...extraProps }: Props) => {

    const [_secureTextEntry, set_secureTextEntry] = useState(secureTextEntry);

    const toggleShowPassword = () => set_secureTextEntry((revVal) => !revVal);

    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{label}</Text>
            <View style={styles.textInputContainer}>
                <TextInput {...extraProps} secureTextEntry={_secureTextEntry} style={styles.textBox} />
                {secureTextEntry && (
                    <TouchableOpacity style={styles.showSecureTextIcon} onPress={toggleShowPassword}>
                        <MaterialIcons name={_secureTextEntry ? 'visibility-off' : 'visibility'} size={24} color="gray" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    textLabel: {
        marginBottom: 10,
        fontSize: 16,
        color: '#2C3A4B',
    },
    textInputContainer: {
        justifyContent: 'center',
    },
    textBox: {
        borderWidth: 1,
        borderColor: '#A5ABB3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        color: '#A5ABB3',
    },

    showSecureTextIcon: {
        position: 'absolute',
        right: 10,
    },
});

export default TextBoxControl;
