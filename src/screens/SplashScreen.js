import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AfterSplash')
        }, 3000);
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={require('../assets/images/Background.png')}>
                <Image style={styles.Image} source={require('../assets/images/logo.png')} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    ImageBackground: {
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'center'
    },
    Image: {
        alignSelf: 'center'
    }
})

export default SplashScreen;