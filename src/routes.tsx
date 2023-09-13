import React, { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../@types';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Navigation from './Components/Navigation';
import Home from './App/Home';
import AddTasks from './App/AddTasks';
import { SafeAreaView } from 'react-native';
import Header from './Components/Header';
import CompletedTasks from './App/CompletedTasks';


export default function Router () {

    const [fontsLoaded] = useFonts({
        'WorkSans_VariableFont_wght': require('../assets/fonts/WorkSans-VariableFont_wght.ttf'),
        'WorkSans_VariableFont_Bold': require('../assets/fonts/WorkSans-Bold.ttf'),
    });

    const MyTheme = {
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'red',
            card: 'red',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
        },
    };

    const { 
        Navigator, Screen
    } = createNativeStackNavigator<propsNavigationStack>();

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
  
    return (
        <SafeAreaView 
            style={{ flex: 1 }} 
            onLayout={onLayoutRootView}>

            <NavigationContainer theme={MyTheme}>

                <Header />
            
                <Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerShown: false,
                        animation: 'none',
                        statusBarColor: '#000'
                    }}>

                    <Screen 
                        name="Home" 
                        component={Home}
                    />
                
                    <Screen 
                        name="AddTasks" 
                        component={AddTasks}
                    />

                    <Screen 
                        name="CompletedTasks" 
                        component={CompletedTasks}
                    />

                </Navigator>

                <Navigation />
      
            </NavigationContainer>
        </SafeAreaView>
    );
}