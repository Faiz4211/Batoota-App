import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';

const CustomBackButton = (props) => {
    return (
        <TouchableOpacity style={{
            marginLeft: wp(3),
            marginTop: hp(4)
        }}
            onPress={props.onPress}
        >
            <Image source={require('../assets/images/backButton.png')} />
        </TouchableOpacity>
    )
}

export default CustomBackButton;