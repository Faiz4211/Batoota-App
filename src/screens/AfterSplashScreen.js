import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';
import CustomButton from '../components/CustomButton';

const AfterSplashScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={require('../assets/images/Background.png')}>
                <Image style={styles.Image} source={require('../assets/images/logo.png')} />
                <View style={{ marginTop: hp('8%') }}>
                    <CustomButton
                        btnText={'Sign In With Google'}
                        bgColor={colors.redPrimary}
                    />
                </View>
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
    },
    Image: {
        marginTop: hp('20%'),
        alignSelf: 'center'
    }
})

export default AfterSplashScreen;