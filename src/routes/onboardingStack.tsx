import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '../pages/onboarding/user-screen';
import CepScreen from '../pages/onboarding/cep-screen';
import AddressScreen from '../pages/onboarding/address-screen';
import AppPasswordScreen from '../pages/onboarding/app-password';
import TransactionPasswordScreen from '../pages/onboarding/transaction-password';
import PasswordRules from '../components/password-rules';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
