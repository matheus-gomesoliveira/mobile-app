import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '../pages/onboarding/user-screen';
import CepScreen from '../pages/onboarding/cep-screen';
import AddressScreen from '../pages/onboarding/address-screen';
import AppPasswordScreen from '../pages/onboarding/app-password';
import TransactionPasswordScreen from '../pages/onboarding/transaction-password';
import PasswordRules from '../components/password-rules';
import {OnboardingContext, OnboardingData} from '../context/OnboardingContext';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    endereco: null,
    usuario: null,
    conta_bancaria:null
  })

  return (
    <OnboardingContext.Provider value={{onboardingData, setOnboardingData}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="OnboardingUser"
          component={UserScreen}
        />
        <Stack.Screen
          name="OnboardingCep"
          component={CepScreen}
        />
        <Stack.Screen
          name="OnboardingAddress"
          component={AddressScreen}
        />
        <Stack.Screen
          name="OnboardingPassword"
          component={AppPasswordScreen}
        />
        <Stack.Screen
          name="OnboardingTransaction"
          component={TransactionPasswordScreen}
        />
        <Stack.Screen
          name="PasswordRules"
          component={PasswordRules}
        />
      </Stack.Navigator>
    </OnboardingContext.Provider>
  );
}
