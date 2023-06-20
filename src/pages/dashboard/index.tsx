import {Image, Text, TouchableOpacity} from 'react-native';
import {
  Balance,
  BalanceTitle,
  BalanceVisible,
  BalanceWrapper,
  BoxText,
  Container,
  FeatureBox,
  Features,
  FeaturesSection,
  MainHeaderWrapper,
  MainSection,
} from './styles';

const Dahsboard = () => {
  return (
    <Container>
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
          <TouchableOpacity>
            <Image source={require('../../../assets/menu.png')} />
          </TouchableOpacity>
        </MainHeaderWrapper>

        <BalanceWrapper>
          <BalanceTitle>Seu Saldo</BalanceTitle>
          <BalanceVisible>
            <Balance>RC 256,08</Balance>
            <TouchableOpacity>
              <Image source={require('../../../assets/visible.png')} />
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
          <FeatureBox>
            <Image source={require('../../../assets/profile.png')} />
            <BoxText>Perfil</BoxText>
          </FeatureBox>
        </Features>
      </FeaturesSection>
    </Container>
  );
};

export default Dahsboard;
