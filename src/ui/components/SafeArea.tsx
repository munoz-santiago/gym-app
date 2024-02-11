import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    children: any;
}

const SafeArea = ({ children }: Props) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            width: '100%',
            height: '100%',
    
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>{children}</View>
    );
};

export default SafeArea;
