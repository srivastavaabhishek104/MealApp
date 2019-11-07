import React from 'react';
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';
import {CATEGORIES} from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (<CategoryGridTile
            onSelect = {()=>{props.navigation.navigate('CategoryMeals',{categoryId: itemData.item.id})}}
            title = {itemData.item.title}
            color = {itemData.item.color}
        />);
    }
    return(
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Meals Category",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screens: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
})

export default CategoriesScreen;


