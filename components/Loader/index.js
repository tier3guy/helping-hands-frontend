// Internal Libraries
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

const Loader = (props) => {
    const { loading, color, size } = props;

    return (
        loading && (
            <View style={styles.loaderContainer}>
                <ActivityIndicator
                    color={color || colors.dark.orange}
                    size={size || 'small'}
                />
            </View>
        )
    )
}

const styles = StyleSheet.create({
    loaderContainer: {
        height: 50,
        width: 50,
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 100000,
        backgroundColor: colors.transparent,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Loader;