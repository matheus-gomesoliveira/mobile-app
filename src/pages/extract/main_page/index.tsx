import { Image, TouchableOpacity } from 'react-native';
import {Container, WhiteBoard, Content, Header, Title, BigText, Strong, SmallText, MediumText, BalanceText, Balance} from './styles';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExtractAll from '../all';
import ExtractIn from '../In';
import ExtractOut from '../out';
import { UserContext } from '../../../context/AppContext';
import { useContext } from 'react';

const ExtractScreen = () => {
  const navigation = useNavigation()
  const Tab = createMaterialTopTabNavigator()
  const { userData, setUserData } = useContext(UserContext);
  const {usuario, conta, endereco} = userData
  function formattedBalance(valor: string | undefined) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(Number(valor));
  }

    return (
    <Container>
      <Header>
        <Image
          source={require('../../../../assets/wave.png')}
          style={{
            position: 'absolute',
            top: 10,
            left: -36,
            height: 220,
            width: '100%',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <Title>Extrato</Title>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Image source={require('../../../../assets/filter.png')} />
        </TouchableOpacity>
      </Header>
      <Balance>
        <MediumText><Strong>Saldo disponível</Strong></MediumText>
        <BalanceText><Strong>RC {formattedBalance(conta?.saldo)}</Strong></BalanceText>
      </Balance>
      <WhiteBoard>
          
          
          <Tab.Navigator
            initialRouteName='Tudo'
            style={{
                borderTopRightRadius:32,
                borderTopLeftRadius:32,
                marginTop:20
            }}
          >
            <Tab.Screen
                name='Tudo'
                component={ExtractAll}
            />
            <Tab.Screen
                name='Entrada'
                component={ExtractIn}
            />
            <Tab.Screen
                name='Saida'
                component={ExtractOut}
            />
          </Tab.Navigator>
        
        
      </WhiteBoard>
    </Container>
  );
};

export default ExtractScreen;
