// Internal Libraries
import { View, StyleSheet } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import InterText from '../Text/InterText';
import TextButton from '../Button/TextButton';

const AddEmailCard = ({onPress, label, message, navigation}) => {

    return (
        <View 
            style={[styles.w100]}
        >
            <InterText style={[styles.text, { width: '98%', alignSelf: 'center' }]}>
                {
                    message ? message : "It seems you haven't added your email yet. Please add your email to get notified when we have any update for you."
                }
            </InterText> 
            <TextButton
                label={label ? label : "@ Add Email"}
                textStyle={styles.addEmailButton}
                onPress={onPress ? onPress : () => navigation.navigate("UpdateEmail")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    w100: {
        width: '100%',
    },
    text: {
        marginVertical: 10,
        color: colors.dark.gray,
        fontSize: 15
    },
    addEmailButton: {
        color: colors.dark.orange,
        marginTop: 20,
    },
});

export default AddEmailCard;