import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Success from '../components/success';
import ErrorModal from '../components/fail';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
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
        name='Fail'
        component={ErrorModal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
