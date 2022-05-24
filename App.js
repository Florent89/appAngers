import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Agenda from './src/components/Agenda/Agenda';
import Museum from './src/components/Museum/Museum';
import News from './src/components/News/News';
import AgendaDetails from './src/components/Agenda/AgendaDetails';

import NewsDetails from './src/components/News/NewsDetails';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const StackAgenda = () => {
  return (
    <Stack.Navigator initialRouteName="AgendaList">
      <Stack.Screen
        name="AgendaList"
        component={Agenda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AgendaDetails"
        component={AgendaDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const StackNews = () => {
  return (
    <Stack.Navigator initialRouteName="NewsList">
      <Stack.Screen
        name="NewsList"
        component={News}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Agenda">
        <Drawer.Screen name="Agenda" component={StackAgenda} />
        <Drawer.Screen name="Musées" component={Museum} />
        <Drawer.Screen name="Actualités" component={StackNews} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
