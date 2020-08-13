import React from "react";
import {View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App(){
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hola Mundo</Text>
      </SafeAreaView>
    </NavigationContainer>
  )
}