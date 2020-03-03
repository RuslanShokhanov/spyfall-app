import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';

import { AgentScreenProps } from './interfaces';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        width: win.width,
        height: win.height
    },
    locationName: {
        position: 'absolute',
        top: 15,
        left: 15
    },
    locationNameText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    buttonWrap: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
    },
    button: {
        alignItems: 'center',
        width: 150,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#262926'
    },
    buttonText: {
        marginTop: 8,
        fontSize: 20,
        color: '#fff'
    }
});


export const AgentScreen = (props: AgentScreenProps) => {
    return (
        <ImageBackground
            style={styles.image}
            source={require('./images/spy.jpg')}
        >
            <View style={styles.locationName}>
                <Text style={styles.locationNameText}>Шпион</Text>
            </View>
            <View style={styles.buttonWrap}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={props.onPress}
                >
                    <Text style={styles.buttonText}>Понятно</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
