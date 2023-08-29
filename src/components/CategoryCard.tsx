import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchRecords } from "../../Redux/CommoditySlice";
import { Link } from "expo-router";

const CategoryCard = ({ title, imgSrc }: { title: string; imgSrc: any }) => {
  const { location } = useAppSelector((state) => state.location)
  const dispatch = useAppDispatch();

  const handlePress = () => {
    // router.push(`category/${title}`)
    dispatch(fetchRecords({type:title,location:location}));
  };

  return (
    <Link
      href={{ pathname: "/category/[type]", params: { type: title } }}
      asChild
    >
      <TouchableOpacity  activeOpacity={0.95} onPress={handlePress}>
        <View
          style={tw.style([
            "bg-white",
            "shadow-md",
            "mx-[3%] border-red-50 rounded-3 border-2 my-2 p-3",
            "min-w-[44%] h-[180px]",
          ])}
        >
          <Image
            style={tw.style(["w-[100%] h-[75%] rounded-2 mb-3"])}
            resizeMode="cover"
            alt="Vegetables"
            source={{uri:imgSrc}}
          />
          <Text style={styles.imgTxt}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  imgTxt: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    // marginBottom:10
  },
});
