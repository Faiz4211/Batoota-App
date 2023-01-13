import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.bgColor,
                borderRadius: 10,
                height: hp('6%'),
                width: wp('80%'),
                alignSelf: 'center',
                marginTop: hp('1%'),
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{
                color: colors.white,
                fontSize: hp('2%'),
                textAlign: 'center',

            }}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;