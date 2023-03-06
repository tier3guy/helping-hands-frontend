import React from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import InterText from '../Text/InterText';
import Input from '../Input';

// Styles
import colors from '../../assets/themes/colors';
import Icon from '../Icons';

const Header = (props) => {

    const { 
        title, 
        navigation, 
        textStyle, 
        searchBar, 
        searchValue,
        onSearchValueChange,
        button,
        onIconPress,
        icon,
        iconSize,
        containerStyle
    } = props;

    return (
        <View style={[styles.w100, containerStyle]}>
            <View style={styles.header}>
                <InterText
                    style={[styles.text, textStyle]}
                >
                    { title || "Header" }
                </InterText>
                {
                    button && (
                        <Icon 
                            name={icon || "settings"}
                            size={iconSize || 20}
                            color={colors.dark.light}
                            onPress={onIconPress ? onIconPress : () => {}}
                        />
                    )
                }
            </View>
            {
                searchBar && (
                    <View style={[styles.w100, styles.searchBar]}>
                        <Input
                            placeholder="Search"
                            icon="search"
                            value={searchValue ? searchValue : undefined}
                            onChangeText={onSearchValueChange ? onSearchValueChange : () => {}}
                        />
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    w100: {
        width: '100%',
    },
    border: {
        borderWidth: 1,
        borderColor: colors.dark.light,
    },
    text: {
        fontSize: 30,
    },
    searchBar: {
        marginVertical: 15,
    },
});

export default Header;