import {Image} from 'react-native';
import {ButtonTitle} from '../../dashboard/styles';
import {
  BarStatus,
  Container,
  StatusBar,
  Title,
  Strong,
  CepTitleWrap,
  Input,
  ButtonView,
  Button,
  CepWrap,
  Info,
  InfoText,
  Wrap,
} from '../global-styles';
import {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Address,
  OnboardingContext,
  OnboardingData,
} from '../../../context/OnboardingContext';

export const CepScreen = () => {
  const navigation = useNavigation();
  const {onboardingData, setOnboardingData} = useContext(OnboardingContext);

  const [cep, setCep] = useState('');

  const disabled = !cep;

  const handleConfirm = async () => {
    const updateAddressData: Address = {
      cep: cep,
      rua: '',
      bairro: '',
      cidade: '',
      numero: '',
      uf: '',
      complemento: '',
    };
    setOnboardingData(prevData => ({
      ...onboardingData,
      endereco: updateAddressData,
    }));

    navigation.navigate('OnboardingAddress');
  };


  return (
    <Container>
      <CepWrap>
        <StatusBar>
          <BarStatus />
          <BarStatus />
        </StatusBar>
        <CepTitleWrap>
          <Title>
            Agora informe o seu endereço. Qual é o seu <Strong>CEP?</Strong>
          </Title>
        </CepTitleWrap>
        <Wrap>
          <Input
            placeholder="99999-999"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="numeric"
            type={'zip-code'}
            onChangeText={setCep}
            value={cep}
          />
          <Info>
            <Image
              source={require('../../../../assets/i.png')}
              style={{
                bottom: 13,
              }}
            />
            <InfoText>
              Utilizamos o seu endereço para o envio de correspondências, como
              cartão físico quando solicitado.
            </InfoText>
          </Info>
        </Wrap>
        <ButtonView>
          <Button
            onPress={handleConfirm}
            disabled={disabled}
            style={{
              opacity: disabled ? 0.4 : 1,
            }}>
            <ButtonTitle>CONFIRMAR</ButtonTitle>
          </Button>
        </ButtonView>
      </CepWrap>
    </Container>
  );
};

export default CepScreen;
