import React, { useRef, useState } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import { categoryList} from "../utils/Categorylist";
import CategoryCard from "../components/CategoryCard";
import { categoryType } from "../types";

const Home = () => {
  return (
    <View
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      // contentContainerStyle={styles.container}
      style={styles.container}
    >
      <Header></Header>
      <View style={styles.main}>
        <View style={tw.style([])}>
          <FlatList
            data={categoryList}
            renderItem={({ item }: { item: categoryType }) => (
              <CategoryCard
                title={item.category}
                imgSrc={item.imgSrc}
              ></CategoryCard>
            )}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
          ></FlatList>
        </View>
      </View>
      {/* <View style={styles.footer}>
        <Text>ABC</Text>
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 8,
  },
  footer: {
    backgroundColor: "blue",
    flex: 1,
  },
});
