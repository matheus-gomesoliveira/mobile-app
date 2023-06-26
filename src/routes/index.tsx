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
        name="OnboardingUser"
        component={UserScreen}
	      options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="OnboardingCep"
        component={CepScreen}
	      options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="OnboardingAddress"
        component={AddressScreen}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingPassword"
        component={AppPasswordScreen}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingTransaction"
        component={TransactionPasswordScreen}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordRules"
        component={PasswordRules}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Dahsboard}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="BankData"
        component={BankData}
	      options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordAlt"
        component={PasswordAlt}
	      options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="AddressAlt"
        component={AddressAlt}
	      options={{headerShown: false}}
      />               
    </Stack.Navigator>
  );
}
