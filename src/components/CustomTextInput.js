import React from 'react';
import { TextInput, View } from 'react-native';
import colors from '../Styles/Color';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const CustomTextInput = (props) => {
    return (
        <TextInput style={{
            alignSelf: 'center',
            borderBottomColor: colors.grey,
            borderBottomWidth: 1,
            width: wp('80%'),
            fontSize: hp('2%'),
            marginBottom: hp('4%')
        }}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
        />
    )
}

export default CustomTextInput;