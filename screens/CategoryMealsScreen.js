import React from 'react';
import {CATEGORIES} from "../data/dummy-data"
import MealList from "../components/MealList";
import {useSelector} from "react-redux";
import DefaultText from "../components/DefaultText";
import {Text,View,StyleSheet} from 'react-native';

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state=>state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0)

    if(displayedMeals.length === 0) {
        return (<View style = {styles.content}>
            <DefaultText>No Meals found, maybe check your filters</DefaultText>
        </View>);
    }

    return(<MealList listData={displayedMeals} navigation={props.navigation}/>);
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find( item => item.id === categoryId)
    return {
        headerTitle: selectedCategory.title,
    };
}

const styles = StyleSheet.create({
    content: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
});

export default CategoryMealsScreen;

