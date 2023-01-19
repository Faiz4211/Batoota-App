import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MainDashboardScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: hp('6%')
            }}>MainDashboardScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainDashboardScreen;