import React, { useEffect } from "react";
import tw from "twrnc";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { categoryList } from "../src/utils/Categorylist";
import CategoryCard from "../src/components/CategoryCard";
import { categoryType } from "../src/types";
import { Stack} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "Redux/hooks";

const Home = () => {
  const { location } = useAppSelector((state) => state.location)

  useEffect(() => {
    console.log(location)
  }, [])
  

  return (
    <View
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      // contentContainerStyle={styles.container}
      style={styles.container}
    >
      <Stack.Screen 
        options={{
          // title: "AgrIndia",
          header: () => (
            <SafeAreaView style={{height:125,width:"100%",justifyContent:"center",
            backgroundColor:"orange",
            alignItems:"center"
            }}>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  // flex:1,
                  // width:"100%",
                  
                }}
              >
                AgrIndia
              </Text>
            </SafeAreaView>
          ),
          // headerTitleAlign:"center",
          // headerStyle:{backgroundColor:'orange'},
          // headerTitleStyle:{fontSize:30,fontFamily:"sans-serif",fontWeight:"700"}
        }}
      />
      <ImageBackground style={styles.main} source={{uri:"https://img.freepik.com/free-vector/abstract-background_53876-90689.jpg?w=360&t=st=1693232024~exp=1693232624~hmac=bbd46315fa095ead8c5636a46ebd382f81031aa92f0d236e5e4b4112bd43b08a"}}>

      {/* <View style={styles.main}> */}
          <FlatList
          style={tw.style(["px-2 py-4"])}
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
      {/* </View> */}
              </ImageBackground>
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
