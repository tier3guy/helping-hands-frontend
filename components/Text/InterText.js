import { StyleSheet, Text } from 'react-native';
import colors from '../../assets/themes/colors';

const InterText = ({children, style, ...props}) => {
    return (
        <Text style={[styles.interText, style]} {...props}>
            {children || props.text}
        </Text>
    );
};

export default InterText;

const styles = StyleSheet.create({
    interText: {
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        color: colors.dark.light,
    },
});
