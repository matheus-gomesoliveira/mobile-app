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
import TransferScreen from '../pages/transaction';
import { Transfer, TransferContext } from '../context/TransferContext';

const Stack = createNativeStackNavigator();

export default function TransferStack() {
  const [transfer, setTransfer] = useState<Transfer | null>({
    destino:'',
    senha_transacional:'',
    valor:0,
    descricao:'',
});

  return (
    <TransferContext.Provider value={{transfer, setTransfer}}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen 
          name="Transfer" 
          component={TransferScreen}
        />
      </Stack.Navigator>
    </TransferContext.Provider>
  );
}