import { StyleSheet,View, Keyboard, Text } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import tw from "twrnc";
import Header from "../../src/components/Header";
import {
  Stack,
  useGlobalSearchParams,
} from "expo-router";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { record } from "../../src/types";
import ListMain from "../../src/screens/ListMain";
import { Capitalize } from "src/utils/CommonFnc";
import LottieView from "lottie-react-native";

const ListbyType = () => {
  const {records,isLoading} = useAppSelector((state) => state.commodities);
  const [list, setlist] = useState<record[]>([]);
  const [search, setsearch] = React.useState("");
  const global = useGlobalSearchParams<{type:string}>();

  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    // Or set a specific startFrame and endFrame with:
    // animationRef.current?.play(30, 120);
    return () => {
      animationRef.current?.reset()
    }
  }, []);

  useEffect(() => {
    setlist(records);
  }, [records]);


  const searchHandle = (txt: string) => {
    // handleSearch(e)
    const filteredArr = records.filter((obj) => {
      return obj.commodity.includes(Capitalize(txt));
    });
    setlist(filteredArr);
    // dispatch(filterRecords(txt))
    setsearch(txt);
  };

  if(isLoading){
    return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Stack.Screen options={{headerShown:false}}/>
      <LottieView ref={animationRef} style={{width:"40%",aspectRatio:1}} source={require("../../assets/Lottie/plant-loading.json")}/>
      <Text style={{marginBottom:"5%",fontSize:16}}>Loading Records</Text>
    </View>
  }

  if(!isLoading && records.length === 0){
    return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Stack.Screen options={{title:global.type,headerShown:true,}}/>
    <Text style={tw.style(["text-blue-500 text-6"])}>Sorry!! No Detials Available</Text>
  </View>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown:true,
          headerRight: () => {
            return <Header text={global.type} value={search} onSearch={searchHandle}></Header>
          },
          // headerLeft: () => {
          //   return <View style={{backgroundColor:"grey",flex:1,alignItems:"flex-end"}}><Text>ABC</Text></View>
          // },
          // headerTitle: () => <Header></Header>,
          // headerSearchBarOptions:{placeholder:"search veges",barTintColor:"pink",},
          headerBackVisible: true,
          gestureDirection: "horizontal",
        }}
      />
      <View style={styles.main} onTouchEndCapture={Keyboard.dismiss}>
        {
          list.length > 0 ?
          <ListMain data={list}></ListMain> : 
          <Text style={tw.style(["text-red-500 text-4 my-10"],{alignSelf:"center"})}>Not Found</Text>
        } 
      </View>
    </View>
  );
};

export default ListbyType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 8,
    backgroundColor: "#ffffff",
  },
  footer: {
    backgroundColor: "blue",
    flex: 1,
  },
});
