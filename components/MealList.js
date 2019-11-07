import React from 'react';
import {View,FlatList,Text,StyleSheet} from 'react-native';
import MealItem from "./MealItem";
import {useSelector} from "react-redux";


const MealList = (props) => {
    const favoriteMeals = useSelector(state=>state.meals.favoriteMeals);
    const renderMealItem = itemData =>{
        const isFavorite = favoriteMeals.some(meal=> meal.id === itemData.item.id)
        return <MealItem
            title={itemData.item.title}
            onSelectMeal={()=>{props.navigation.navigate('MealDetail',{
                mealId:itemData.item.id,
                mealTitle:itemData.item.title,
                isFav:isFavorite
            })}}
            duration = {itemData.item.duration}
            complexity={itemData.item.complexity}
            affordablity = {itemData.item.affordablity}
            image = {itemData.item.imageUrl}
        />
    }
    return (
        <View style={styles.screens}>
            <FlatList
                data={props.listData}
                keyExtractor={(item,index)=>item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default MealList;