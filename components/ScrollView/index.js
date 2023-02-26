import { ScrollView } from 'react-native';

const RNScrollView = ({children, props, horizontalIndicator, verticalIndicator}) => {
    return (
        <ScrollView
            {...props}
            showsHorizontalScrollIndicator={horizontalIndicator ? true : false}
            showsVerticalScrollIndicator={verticalIndicator ? true : false}
        >
            {children}
        </ScrollView>
    );
}

export default RNScrollView;