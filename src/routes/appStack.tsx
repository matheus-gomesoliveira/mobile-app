import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dahsboard from '../pages/dashboard';
import PasswordRules from '../components/password-rules';
import Profile from '../pages/profile';
import BankData from '../pages/bank-data';
import PasswordAlt from '../pages/password-alt';
import AddressAlt from '../pages/address-alt';
import {useState} from 'react';
import {UserContext, UserData} from '../context/AppContext';
import TransactionAlt from '../pages/transaction-alt';
import ExtractScreen from '../pages/extract/main_page';
import FilterScreen from '../pages/extract/filters';
import ExtractStack from './extractStack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  const [userData, setUserData] = useState<UserData>({
    usuario: null,
    endereco: null,
    conta: null,
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Home"
          component={Dahsboard}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="BankData"
          component={BankData}
        />
        <Stack.Screen
          name="PasswordAlt"
          component={PasswordAlt}
        />
        <Stack.Screen
          name="PasswordRules"
          component={PasswordRules}
        />
        <Stack.Screen
          name="AddressAlt"
          component={AddressAlt}
        />
        <Stack.Screen
          name="TransactionAlt"
          component={TransactionAlt}
        />
        <Stack.Screen
          name="ExtractStack"
          component={ExtractStack}
        />
      </Stack.Navigator>
    </UserContext.Provider>
  );
}
