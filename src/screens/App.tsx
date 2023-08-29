// import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
// // import { StatusBar } from 'expo-status-bar';
// import Home from "./screens/Home";
// import { store } from "./Redux/Store";
// import { Provider } from "react-redux";
// import ListwithSearch from "./screens/ListwithSearch";

// const AppContainer = () => {
//   return (
//     <View style={styles.wrapper}>
//       <StatusBar backgroundColor={"red"}></StatusBar>
//       <SafeAreaView style={styles.container}>
//         {/* <View >
//       <View>
//         <Text style={styles.title}>AgroWorld</Text>
//       </View>
//     </View> */}
//         <Home />
//         {/* <ListwithSearch/> */}
//       </SafeAreaView>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <Provider store={store}>
//     <AppContainer></AppContainer>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "pink",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 60,
//     fontWeight: "bold",
//     fontStyle: "italic",
//   },
// });


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App Hello</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})