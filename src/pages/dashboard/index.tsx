import {Image, Text, TouchableOpacity} from 'react-native';
import {
  Balance,
  BalanceTitle,
  BalanceVisible,
  BalanceWrapper,
  BoxText,
  ButtonTitle,
  Container,
  FeatureBox,
  Features,
  FeaturesSection,
  LogOutButton,
  MainHeaderWrapper,
  MainSection,
} from './styles';
import ErrorModal from '../../components/fail';
import {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {GetAccountBalance} from '../../api/AccountApi';
import { Account, Address, User, UserContext, UserData } from '../../context/AppContext';
import { GetUserData } from '../../api/UserApi';

const Dahsboard = () => {
  const navigation = useNavigation();

  const { userData, setUserData } = useContext(UserContext);
  
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [balanceIsVisible, setBalanceIsVIsible] = useState(true);

  const handleBalanceIsVisible = ()=>{
    setBalanceIsVIsible(!balanceIsVisible);
  }

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  const handleLogOut = () => {
    AsyncStorage.removeItem('AccessToken');
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };


  function formattedBalance(valor: string | undefined) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(Number(valor));
  }

  const getUser = async ()=>{
    try {
      const res = await GetUserData()
      console.log((res?.data))
      const jsonString = JSON.stringify(res?.data)
      const { usuario, endereco, conta } = JSON.parse(jsonString);
        
      const updatedUserData: UserData = {
        usuario: usuario as User,
        endereco: endereco as Address,
        conta: conta as Account,
      };
      setUserData(updatedUserData);
    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      {modalIsVisible && (
        <ErrorModal
          ModalTitle={'Atenção'}
          ModalSubtitle={'Tem certeza que deseja sair?'}
          isVisible={modalIsVisible}
          setIsVisible={setModalIsVisible}>
          <LogOutButton onPress={handleLogOut}>
            <ButtonTitle>SAIR</ButtonTitle>
          </LogOutButton>
        </ErrorModal>
      )}
      <MainSection>
        <Image
          source={require('../../../assets/wave.png')}
          style={{
            position: 'absolute',
            top: 10,
            height: 220,
            width: '100%',
          }}
        />
        <MainHeaderWrapper>
          <Image
            source={require('../../../assets/rubbank_dash.png')}
            style={{
              resizeMode: 'contain',
              width: 140,
              height: 30,
            }}
          />
          <TouchableOpacity onPress={handleOpenModal}>
            <Image source={require('../../../assets/LogOut.png')} />
          </TouchableOpacity>
        </MainHeaderWrapper>

        <BalanceWrapper>
          <BalanceTitle>Seu Saldo</BalanceTitle>
          <BalanceVisible>
            <Balance>RC {balanceIsVisible? (formattedBalance(userData.conta?.saldo)): "**.**"}</Balance>
            <TouchableOpacity onPress={handleBalanceIsVisible}>
              {balanceIsVisible?(
                <Image 
                  source={require('../../../assets/visible.png')} 
                />):(
                  <Image 
                    source={require('../../../assets/not-visible.png')} 
                  />
                )
              }
            </TouchableOpacity>
          </BalanceVisible>
        </BalanceWrapper>
      </MainSection>
      <FeaturesSection>
        <Features>
          <FeatureBox>
            <Image source={require('../../../assets/transfer.png')} />
            <BoxText>Transferir</BoxText>
          </FeatureBox>
          <FeatureBox>
            <Image source={require('../../../assets/extract.png')} />
            <BoxText>Extrato</BoxText>
          </FeatureBox>
          <FeatureBox onPress={()=>navigation.navigate('Profile')}>
            <Image source={require('../../../assets/profile.png')} />
            <BoxText>Perfil</BoxText>
          </FeatureBox>
        </Features>
      </FeaturesSection>
    </Container>
  );
};

export default Dahsboard;
