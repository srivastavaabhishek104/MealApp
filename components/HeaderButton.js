import React from 'react';
import {View,Text,StyleSheet,Platform} from "react-native";
import {HeaderButton} from "react-navigation-header-buttons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from '../constants/Colors'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android'?'white':Colors.primaryColor} />
    );
};
const styles = StyleSheet.create({});

export default CustomHeaderButton;