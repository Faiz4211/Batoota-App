import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CustomBackButton from '../components/CustomBackButton';
import colors from '../Styles/Color';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomTextInput from '../components/CustomTextInput';
import SocialButton from '../components/SocialButton';

const SigninScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation();
    return (
        <ImageBackground style={styles.container} source={require('../assets/images/SigninBackground.png')}>
            <Text style={styles.Text}>Welcome Back!</Text>
            <CustomTextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder={'Email'}
            />
            <CustomTextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
            />
            <Text style={styles.refText}>Forget Password?</Text>
            <Text style={styles.refText}>Create Account</Text>
            <SocialButton
                onPress={() => navigation.navigate('Dashboard')}
                btnText={'SIGN IN'}
                bgColor={colors.bluePrimary}
            />
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    Text: {
        textAlign: 'center',
        marginBottom: hp('10%'),
        fontSize: hp('3%'),
        color: colors.black
    },
    refText: {
        color: colors.black,
        marginLeft: wp('11%'),
        marginBottom: hp('5%'),
    }
});

export default SigninScreen;