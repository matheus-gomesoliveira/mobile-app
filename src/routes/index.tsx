import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Dahsboard from '../pages/dashboard';
import Splash from '../pages/splash';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
	      options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="Home"
        component={Dahsboard}
	      options={{headerShown: false}}
      /> 
    </Stack.Navigator>
  );
}
