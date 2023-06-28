import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Dahsboard from '../pages/dashboard';
import Splash from '../pages/splash';
import CepScreen from '../pages/onboarding/cep-screen';
import UserScreen from '../pages/onboarding/user-screen';
import AddressScreen from '../pages/onboarding/address-screen';
import AppPasswordScreen from '../pages/onboarding/app-password';
import PasswordRules from '../components/password-rules';
import TransactionPasswordScreen from '../pages/onboarding/transaction-password';
import Profile from '../pages/profile';
import BankData from '../pages/bank-data';
import PasswordAlt from '../pages/password-alt';
import AddressAlt from '../pages/address-alt';
import OnboardingStack from './onboardingStack';
import AppStack from './appStack';

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
        name="Onboarding"
        component={OnboardingStack}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="App"
        component={AppStack}
	      options={{headerShown: false}}
      />      
    </Stack.Navigator>
  );
}