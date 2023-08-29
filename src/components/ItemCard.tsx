import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { record } from "../types";
import { FontAwesome } from '@expo/vector-icons';

const ItemCard = ({ detail }: { detail: record }) => {
  return (
    // <View style={tw.style([""])}>
    <View
      style={tw.style(["h-[40] shadow-lg gap-3 bg-blue-50 border-[1px] p-3 pt-2 my-3"], {
        flex: 1,borderRadius:8
      })}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 2, gap: 2 }}>
          <Text
            style={tw.style(["text-pink-500"], {
              fontSize: 22,
              fontWeight: "700",
            })}
          >
            {detail.commodity}
          </Text>
          <Text style={tw.style(["text-green-700"], { fontSize: 13 })}>
            At {detail.market} Market
          </Text>
        </View>
        <View style={{ gap: 2, alignItems: "center" }}>
          <Text style={tw.style(["text-pink-500"], { fontSize: 18, fontWeight: "500" })}>
          <FontAwesome name="rupee" size={15} color="black" /> {detail.modal_price} 
          </Text>
          <Text style={{ fontSize: 13 }}>Per Qunital</Text>
        </View>
      </View>
      <View
        style={tw.style(["flex-1 gap-3 flex-row"], {
          alignItems: "center",
          justifyContent: "space-evenly",
        })}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={tw.style(["w-[100%] h-[100%]"])}
            source={{uri:detail.imgSrc}}
            resizeMode="cover"
            borderRadius={10}
            alt="apple"
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={styles.priceTxt}>Min Price</Text>
          <Text style={styles.priceTxt}><FontAwesome name="rupee" size={12} color="black" /> {detail.min_price} /Qunital</Text>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[styles.priceTxt]}>Max Price</Text>
          <Text style={[styles.priceTxt]}><FontAwesome name="rupee" size={12} color="black" /> {detail.max_price} /Qunital</Text>
        </View>
      </View>
      {/* </View> */}
    </View>
    // </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  priceTxt: {
    // textAlign: "center",
    fontSize: 14,
  },
});
