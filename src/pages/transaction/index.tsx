import {Image, TouchableOpacity, View} from 'react-native';
import {
  Container,
  WhiteBoard,
  Content,
  Header,
  Title,
  BigText,
  Strong,
  SmallText,
  MediumText,
  BalanceText,
  Balance,
  InputLabel,
  Label,
  Input,
  ButtonView,
  Button,
  ButtonTitle,
  Error,
  ErrorText
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {UserContext} from '../../context/AppContext';
import {useContext, useState} from 'react';
import { getDestinyData } from '../../api/AccountApi';
import { TransferContext } from '../../context/TransferContext';
import ErrorModal from '../../components/fail';
import PreTransfer from '../../components/pre-transfer';

const TransferScreen = () => {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const {userData, setUserData} = useContext(UserContext);
  const {conta, usuario} = userData;
  const [destinyName, setDestinyName] = useState('')
  const [destinyAccount, setDestinyAccount] = useState('')

  const{transfer, setTransfer}= useContext(TransferContext)

  const[preTransfer, setPreTransfer] = useState(false)

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const destinyData = async (identification:string) => {
    const res = await getDestinyData(identification)
    console.log("Response:",res)
    if(res?.dados){
      setDestinyName(res.dados.nome)
      setDestinyAccount(res.dados.numero_conta)
      setPreTransfer(true)
    } else if(res?.message){
      setError(true)
      setErrorMessage(res.message)
    }
  }

  function formattedBalance(valor: string | undefined) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(Number(valor));
  }

  const CpfTransfer = () => {
    const [cpf, setCpf] = useState('');
    const sameUserCpf:boolean = usuario?.cpf == cpf.replace(/[^\w]/g, '')
    const clickable:boolean = cpf.replace(/[^\w]/g, '').length == 11 && !sameUserCpf


    return (
      <Content>
        {error && (
        <ErrorModal
          ModalTitle={'Atenção'}
          ModalSubtitle={errorMessage}
          isVisible={error}
          setIsVisible={setError}
        />
        )}
        <InputLabel>
          <Label>CPF</Label>
          <Input
            keyboardType="numeric"
            type={'cpf'}
            onChangeText={text => setCpf(text)}
            value={cpf}
          />
          {sameUserCpf &&(
            <Error>
              <ErrorText>
                Você não pode realizar transferências para você mesmo, confira os dados e tente novamente.
              </ErrorText>
            </Error>
          )}
        </InputLabel>
        <ButtonView>
          <Button 
            onPress={()=>destinyData(cpf.replace(/[^\w]/g, ''))}
            disabled={!clickable}
            style={{
                opacity: !clickable ? 0.4 : 1,
            }}
            >
            <ButtonTitle>CONTINUAR</ButtonTitle>
          </Button>
        </ButtonView>
      </Content>
    );
  };

  const AccountTransfer = () => {
    const [account, setAccount] = useState('');
    const sameUserAccount:boolean = conta?.numero_conta == parseInt(account)
    const clickable:boolean = account != '' && !sameUserAccount
    
    return (
      <Content>
        <InputLabel>
          <Label>Agência</Label>
          <Input
            keyboardType="numeric"
            type={'only-numbers'}
            editable={false}
            value={'0001'}
          />
          <InputLabel>
            <Label>Número da conta</Label>
            <Input
              keyboardType="numeric"
              type={'only-numbers'}
              onChangeText={text => setAccount(text)}
              value={account}
            />
          {sameUserAccount &&(
            <Error>
              <ErrorText>
                Você não pode realizar transferências para você mesmo, confira os dados e tente novamente.
              </ErrorText>
            </Error>
          )}
          </InputLabel>
        </InputLabel>
        <ButtonView>
          <Button 
            onPress={()=>destinyData(account)}
            disabled={!clickable}
            style={{
                opacity: !clickable ? 0.4 : 1,
            }}  
          >
            <ButtonTitle>CONTINUAR</ButtonTitle>
          </Button>
        </ButtonView>
      </Content>
    );
  };

  return (
    <Container>
      <Header>
        <Image
          source={require('../../../assets/wave.png')}
          style={{
            position: 'absolute',
            top: 10,
            left: -36,
            height: 220,
            width: '100%',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <Title>Transferência</Title>
        <View
          style={{
            width: 24,
            height: 24,
          }}
        />
      </Header>
      <Balance>
        <MediumText>
          <Strong>Saldo disponível</Strong>
        </MediumText>
        <BalanceText>
          <Strong>RC {formattedBalance(conta?.saldo)}</Strong>
        </BalanceText>
      </Balance>
      <WhiteBoard>
        {preTransfer
        ? <PreTransfer
            originName={usuario?.nome}
            originCpf={usuario?.cpf}
            destinyName={destinyName}
            destinyAccount={destinyAccount}
            isVisible={preTransfer}
            setIsVisible={setPreTransfer}
          />
        :(<Tab.Navigator
          initialRouteName="Tudo"
          style={{
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
            marginTop: 20,
          }}>
          <Tab.Screen name="CPF" component={CpfTransfer} />
          <Tab.Screen name="Número da conta" component={AccountTransfer} />
        </Tab.Navigator>)}
      </WhiteBoard>
    </Container>
  );
};

export default TransferScreen;
