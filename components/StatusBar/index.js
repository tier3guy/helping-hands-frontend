import { StatusBar } from 'react-native';
import colors from '../../assets/themes/colors';

/**
 * @param {string} mode - "light" or "dark"
 * @param {string} backgroundColor - "#FFFFFF" or "#20262E"
 * @param {string} barStyle - "light-content" or "dark-content"
 * @returns {StatusBar}
 */
const RNStatusBar = ({mode}) => {

    const backgroundColor = mode? mode === "light" ? colors.dark.light : colors.dark.dark 
                                : colors.dark.dark;

    const barStyle = mode? mode === "light" ? "dark-content" : "light-content" 
                         : "light-content";

    return <StatusBar 
            animated={true}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
        />
}

export default RNStatusBar;