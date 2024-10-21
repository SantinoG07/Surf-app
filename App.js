import { StatusBar } from "expo-status-bar";
import { View} from "react-native";
import SideMenu from "./components/SideMenu"

import 'react-native-gesture-handler';



export default function App() {
  return (
      <View>
      <StatusBar style="light" />
      <SideMenu />
      </View>
  );
}


