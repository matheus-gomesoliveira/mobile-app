import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ExtractScreen from '../pages/extract/main_page';
import FilterScreen from '../pages/extract/filters';
import {ExtractContext, Params} from '../context/ExtractContext';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function ExtractStack() {
  const [params, setParams] = useState<Params | null>({})

  return (
    <ExtractContext.Provider value={{params, setParams}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen 
          name="Extract" 
          component={ExtractScreen}
        />
        <Stack.Screen 
          name="Filter" 
          component={FilterScreen}
        />
      </Stack.Navigator>
    </ExtractContext.Provider>
  );
}
