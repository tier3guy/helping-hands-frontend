// Internal Libraries
import { useState, useEffect, } from 'react';
import { View, StyleSheet } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import InterText from '../Text/InterText';

const Timer = ({ time, style, setEnable }) => {

    const [timer, setTimer] = useState(time || 30);
    const [color, setColor] = useState(colors.dark.orange);

    useEffect(() => {

        if(timer === 0){
            setEnable(true);
            setColor(colors.dark.gray);
            return;
        }

        const interval = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    
    return (
        <View>
            <InterText style={{
                color: colors.dark.orange,
                fontSize: 14,
                color,
                ...style
            }}>
                {
                    minutes < 10 ? `0${minutes}` : minutes
                }:
                {
                    seconds < 10 ? `0${seconds}` : seconds
                }
            </InterText>
        </View>
    )
}

export default Timer;