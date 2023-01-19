import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import AfterSplashScreen from '../screens/AfterSplashScreen';
import SigninScreen from '../screens/SigninScreen';
import MainDashboardScreen from '../screens/MainDashboardScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
            />
            <Stack.Screen
                name="AfterSplash"
                component={AfterSplashScreen}
            />
            <Stack.Screen
                name="SignIn"
                component={SigninScreen}
            />
            <Stack.Screen
                name="Dashboard"
                component={MainDashboardScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;