// @flow
import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { createAppNavigator, createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { constants } from 'expo';
import HomeScreen from './src/components/home';
import DetailScreen from './src/components/detail';


const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                headerBackTitle: 'Back',
            },
          },
    Detail: { screen: DetailScreen,
            navigationOptions: {
              title: 'Detail',
          },
        }
});

export default createAppContainer(AppNavigator);

//https://medium.com/@hassanabid/creating-react-native-apps-with-django-rest-api-59e8417865e9
//yarn start