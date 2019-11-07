import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform,Text} from "react-native";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavoritesScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'
import FilterScreen from "../screens/FilterScreen";




const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail:MealDetailScreen
    },
    {
        initialRouteName: 'Categories',
        defaultNavigationOptions:{
            title:'Meal App',
            headerStyle: {
                backgroundColor: Platform.OS==="android"? Colors.primaryColor:""
            },
            headerTintColor:Platform.OS==="android"? 'white':"",
            headerTitleStyle:{
                fontFamily: 'open-sans-bold'
            }
        },
        headeBackTitleStyle:{
            fontFamily: 'open-sans-bold'
        }
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavouritesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail:MealDetailScreen
    },
    {
        initialRouteName: 'Favorites',
        defaultNavigationOptions:{
            title:'Meal App',
            headerStyle: {
                backgroundColor: Platform.OS==="android"? Colors.primaryColor:""
            },
            headerTintColor:Platform.OS==="android"? 'white':"",
            headerTitleStyle:{
                fontFamily: 'open-sans-bold'
            },
            headeBackTitleStyle:{
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

const tabScreenConfig = {
    Meals:{screen: MealsNavigator, navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel:Platform.OS==='android'? <Text style={{fontFamily:"open-sans-bold"}}>Meals</Text>: "Meals"
        }},
    Favorites: {
        screen:FavNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel:Platform.OS==='android'? <Text style={{fontFamily:"open-sans-bold"}}>Favorites</Text>: "Favorites"
        }}
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig,{
        activeColor: 'white',
        shifting:true
    }) :
    createBottomTabNavigator(tabScreenConfig,{
        tabBarOptions: {
            labelStyle:{
                fontFamily:'open-sans'
            },
            activeTintColor: Colors.accentColor
        }
    });

const FiltersNavigator = createStackNavigator(
    {
        Filters: FilterScreen
    },
    {
        initialRouteName: 'Filters',
        defaultNavigationOptions:{
            title:'Meal App',
            headerStyle: {
                backgroundColor: Platform.OS==="android"? Colors.primaryColor:""
            },
            headerTintColor:Platform.OS==="android"? 'white':"",
            headerTitleStyle:{
                fontFamily: 'open-sans-bold'
            },
            headeBackTitleStyle:{
                fontFamily: 'open-sans-bold'
            }
        }
    })

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: FiltersNavigator,
},{
    contentOptions:{
        activeTintColor:Colors.accentColor,
        labelStyle:{
            fontFamily:'open-sans-bold',
        }
    }
})



export default createAppContainer(MainNavigator);