import React from "react";
import {View, Text, Button } from "react-native";

export default function About(props){
    const { navigation } = props;
    return(
        <View>
            <Text>Estamos en la About</Text>
            <Button title="Ir a Contact" onPress={() => navigation.navigate("contact")} />
        </View>
    )
}