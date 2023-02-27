import React from 'react';
import { View } from 'react-native';

const RNView = (children, props) => {
    
    return (
        <View 
            style={{
                width: '100%', 
                borderWidth: props.border ? 1 : 0,
                borderColor: props.border ? colors.dark.light : 'transparent',
            }} 
            {...props}
        >
            {children}
        </View>
    );
} 

export default RNView;