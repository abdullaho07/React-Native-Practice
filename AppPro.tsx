import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',

                }
            ]}>
            <View style={{ flex: 3, backgroundColor: 'black' }} />
            <View style={{ flex: 2, backgroundColor: 'white' }} />
            <View style={{ flex: 3, backgroundColor: 'black' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    WhiteText: {
        color: '#FFFFFF'
    },
    DarkText: {
        color: '#000000'
    },
})




export default AppPro;
