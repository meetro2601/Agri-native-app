import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const Header = ({ text, value, onSearch }) => {
  const [searchShow, setsearchShow] = useState(false);
  const searchInput = useRef<TextInput | null>();

  const onSearchPress = () => {
    setsearchShow(!searchShow);
  };

  return (
    <View style={styles.header}>
      <View style={styles.searchBox}>
        {searchShow ? (
          <>
            <TextInput
              // autoFocus={true}
              ref={searchInput}
              style={styles.searchInput}
              value={value}
              onChangeText={(txt) => onSearch(txt)}
              placeholder={`Search ${text}`}
            ></TextInput>
            <Pressable
              onPress={() => {
                onSearch(""), onSearchPress();
              }}
              style={styles.close}
            >
              <MaterialIcons name="search-off" size={30} color="black" />
            </Pressable>
          </>
        ) : (
          <Pressable onPress={onSearchPress} style={styles.search}>
            <MaterialIcons name="search" size={30} color="black" />
          </Pressable>
        )}
      </View>
      <Pressable style={styles.filter}>
        <MaterialIcons name="menu-open" size={34} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: 0.82 * windowWidth,
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  search: {
    // alignItems: "flex-end",
    // width:50
  },
  filter: {
    // alignItems: "center",
  },
  searchBox: {
    // backgroundColor: "yellow",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  searchInput: {
    borderColor: "grey",
    borderBottomWidth: 0.5,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    fontSize: 16,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    padding: 5,
    width: "100%",
  },
  close: {
    position: "absolute",
    right: 0,
  },
});
