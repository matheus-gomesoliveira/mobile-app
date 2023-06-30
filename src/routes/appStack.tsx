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

const Stack = createNativeStackNavigator();

export default function AppStack() {
  const [userData, setUserData] = useState<UserData>({
    usuario: null,
    endereco: null,
    conta: null,
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Stack.Navigator>
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
          name="PasswordRules"
          component={PasswordRules}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddressAlt"
          component={AddressAlt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionAlt"
          component={TransactionAlt}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </UserContext.Provider>
  );
}
