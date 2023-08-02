// import { Provider } from 'react-redux';
// // import Home from './src/Screens/Home';
// import { store } from './Redux/Stores';
// import APIexample from './src/Screens/APIexample';
// import Header from './src/Components/Header';
// import Product from './src/Components/Product';
// import { Image, Text, View, Button, ScrollView } from 'react-native';

// export default function App() {

//   const products = [
//     {
//       name: "Samsung",
//       color: "black",
//       prise: 30000,
//       image: "https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=740&t=st=1690223259~exp=1690223859~hmac=ce5e685a0b1ce488f5b163c034ea0328b28310b8273f93fbbea311107160bcd5https://unsplash.com/photos/"
//     },
//     {
//       name: "Redmi",
//       color: "red",
//       prise: 20000,
//       image: "https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=740&t=st=1690223259~exp=1690223859~hmac=ce5e685a0b1ce488f5b163c034ea0328b28310b8273f93fbbea311107160bcd5"
//     },
//     {
//       name: "IPhone",
//       color: "white",
//       prise: 70000,
//       image: "https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=740&t=st=1690223259~exp=1690223859~hmac=ce5e685a0b1ce488f5b163c034ea0328b28310b8273f93fbbea311107160bcd5"
//     },
//     {
//       name: "poco",
//       color: "green",
//       prise: 35000,
//       image: "https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg?w=740&t=st=1690223259~exp=1690223859~hmac=ce5e685a0b1ce488f5b163c034ea0328b28310b8273f93fbbea311107160bcd5"
//     }
//   ]

//   return (
//     <Provider store={store}>
//       <Header />
//       <ScrollView>
//         {
//           products.map((item) => <Product item={item} /> )
//         }
//       </ScrollView>

//     </Provider>
//   );
// }


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/Stores';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AxiousPostApiExa1 } from './src/Screens/AxiousAPI/AxiousPostApi/AxiousPostApiExa1';
import AxiousDeleteApiExa1 from './src/Screens/AxiousAPI/AxiousDeleteApi/AxiousDeleteApiExa1';
import AxiosPutApiExa1 from './src/Screens/AxiousAPI/AxiousPutApi/AxiousPutApiExa1';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AxiosPutApiExa1" component={AxiosPutApiExa1} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})