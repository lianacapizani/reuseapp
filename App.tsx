import Home from './screens/Home';
// import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Routes from './routes';


export default function App(){
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return null; // ou <AppLoading />
  }

  return (
    <Routes/>

  );
};

