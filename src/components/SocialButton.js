import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Styles/Color';

const SocialButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.bgColor,
            borderRadius: 10,
            height: hp('6%'),
            width: wp('80%'),
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignSelf: 'center',
        }}>
            <Image source={props.Image} />
            <View style={styles.textView}>
                <Text style={styles.Text} >{props.btnText}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    textView: {
        textAlign: 'left',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        color: colors.white,
        fontSize: hp('2%')
    }
});

export default SocialButton;