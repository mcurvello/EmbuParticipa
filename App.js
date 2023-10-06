import { StatusBar } from "expo-status-bar";
import { AppNavigator } from "./src/navigation";

import {
  useFonts,
  SourceSansPro_400Regular,
} from "@expo-google-fonts/source-sans-pro";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";

const firebaseConfig = {
  apiKey: "AIzaSyBKARPZFyZ47MoX-6lNePpSwHmvYAGXTu4",
  authDomain: "nonvastum.firebaseapp.com",
  projectId: "nonvastum",
  storageBucket: "nonvastum.appspot.com",
  messagingSenderId: "294548956017",
  appId: "1:294548956017:web:2cfdafbbc9ddd04e3c8cd0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [fontLoaded] = useFonts({ SourceSansPro_400Regular });

  if (!fontLoaded) {
    return null;
  }
  return (
    <>
      <AuthenticationContextProvider>
        <AppNavigator />
      </AuthenticationContextProvider>
      <StatusBar />
    </>
  );
}
