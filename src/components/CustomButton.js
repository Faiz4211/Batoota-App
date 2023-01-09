import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';

const CustomButton = ({ btnText, bgColor }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: bgColor,
            borderRadius: 10,
            height: hp('6%'),
            width: wp('80%'),
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image source={require('../assets/images/google.png')} />
            <Text style={styles.Text}>{btnText}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: hp('2%'),
        textAlign: 'center',
        color: colors.white
    }
});

export default CustomButton;