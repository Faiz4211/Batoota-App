import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';
import SocialButton from '../components/SocialButton';
import CustomButton from '../components/CustomButton';

const AfterSplashScreen = (prop) => {
    const navigation = useNavigation();
    const images = {
        google: require('../assets/images/google.png'),
        facebook: require('../assets/images/facebook.png')
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={require('../assets/images/Background.png')}>
                <Image style={styles.Image} source={require('../assets/images/logo.png')} />
                <View style={{ marginTop: hp('8%') }}>
                    <SocialButton
                        btnText={'Sign In With Google'}
                        bgColor={colors.redPrimary}
                        Image={images.google}
                    />
                </View>
                <View style={{ marginTop: hp('1%') }}>
                    <SocialButton
                        btnText={'Sign In With Facebook'}
                        bgColor={colors.darkBlue}
                        Image={images.facebook}
                    />
                </View>
                <Text style={styles.Text}>Or</Text>
                <CustomButton
                    bgColor={colors.yellowPrimary}
                    btnText={'SIGN IN'}
                />
                <CustomButton
                    bgColor={colors.bluePrimary}
                    btnText={'SIGN UP'}
                />
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
    },
    Text: {
        textAlign: 'center',
        marginTop: hp('2%'),
        fontSize: hp('2%'),
        color: colors.grey
    }
})

export default AfterSplashScreen;