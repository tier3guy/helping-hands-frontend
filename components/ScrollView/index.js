import { ScrollView } from 'react-native';

const RNScrollView = ({children, props}) => {

    return (
        <ScrollView
            showsHorizontalScrollIndicator={props?.horizontalIndicator ? true : false}
            showsVerticalScrollIndicator={props?.verticalIndicator ? true : false}
            style={{
                width: '100%',
                ...props?.style,
            }}
            {...props}
        >
            {children}
        </ScrollView>
    );
}

export default RNScrollView;