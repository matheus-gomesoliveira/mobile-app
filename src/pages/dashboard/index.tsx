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
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {GetAccountBalance} from '../../api/AccountApi';

const Dahsboard = () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    AsyncStorage.removeItem('AccessToken');
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [userData, setUserData] = useState('');
  const [balance, setBalance] = useState('**.**');

  const [balanceIsVisible, setBalanceIsVIsible] = useState(true);

  const handleBalanceIsVisible = ()=>{
    setBalanceIsVIsible(!balanceIsVisible);
  }

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  function formattedBalance(valor: string) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(Number(valor));
  }

  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = async () => {
    try {
      const res = await GetAccountBalance();
      console.log(res?.data);
      const userData = res?.data;
      setUserData(userData);
      setBalance(formattedBalance(userData.saldo));
    } catch (e) {
      console.log(e);
    }
  };

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
            <Balance>RC {balanceIsVisible? (balance): "**.**"}</Balance>
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
