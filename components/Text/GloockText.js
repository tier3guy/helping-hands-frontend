import { StyleSheet, Text } from 'react-native';
import colors from '../../assets/themes/colors';

const GloockText = ({children, style, ...props}) => {
    return (
        <Text style={[styles.gloockText, style]} {...props}>
            {children || props.text}
        </Text>
    );
};

export default GloockText;

const styles = StyleSheet.create({
    gloockText: {
        fontFamily: 'Gloock',
        fontSize: 20,
        color: colors.dark.light,
    },
});
