import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import React from "react";
import {  useAppSelector } from "Redux/hooks";
import { record } from "../types";

const ItemCard = ({detail}:{detail:record})=>{
  return <View style={tw.style(["h-[40]"])}>
  <View style={tw.style(["flex-row bg-blue-50 border-[1px] m-3"], { flex: 1 })}>
    <View style={styles.imgContainer}>
      <Image
        style={tw.style(["w-[100%] h-[100%]"])}
        source={require("assets/Fruits/apple.jpeg")}
        resizeMode="contain"
        borderRadius={50}
        alt="apple"
      />
    </View>
    <View style={tw.style(["bg-yellow-50 m-2 border-[0.1]"], { flex: 3 })}>
      <Text style={tw.style(["text-red-500 text-5"])}>{detail.commodity}</Text>
      <Text>{detail.market}</Text>
      <Text>{detail.recordId}</Text>
      <Text>{detail.modal_price}</Text>
    </View>
  </View>
  </View>
  
}

const Main = ({data}) => {
  
  const loading = useAppSelector(state =>state.commodities.isLoading)
  
  if(loading){
    return <View>
      <Text>Loading Records</Text>
    </View>
  }

  if(!loading && data.length === 0){
    return <View style={{flex:1,alignItems:"center"}}>
    <Text style={tw.style(["text-blue-500 text-6 mt-[50%]"])}>Sorry!! No Detials Available</Text>
  </View>
  }
  
  return (
    <View>
       <FlatList
            data={data}
            renderItem={({ item }: { item: record }) => (
              <ItemCard
                detail={item}
              ></ItemCard>
            )}
            // keyExtractor={(item) => `${item.id}`}
            // numColumns={2}
          ></FlatList>
    </View>
    
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    borderWidth: 1,
    margin:8,
  },
});
