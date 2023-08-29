import { FlatList, StyleSheet, Text} from "react-native";
import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import { record } from "../types";
import ItemCard from "../components/ItemCard";

const ListMain = ({ data }) => {
  const { location } = useAppSelector((state) => state.location);

  return (
      <FlatList
      style={{
        paddingHorizontal:12}}
        data={data}
        ListHeaderComponent={() => (
            <Text style={{marginTop:8,color:'grey'}}>
              Showing results for {location.district}, {location.state}, {location.country}
            </Text>
          
        )}
        renderItem={({ item }: { item: record }) => (
          <ItemCard detail={item}></ItemCard>
        )}
        keyExtractor={(item) => `${item.recordId}`}
        // numColumns={2}
      ></FlatList>
  );
};

export default ListMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
