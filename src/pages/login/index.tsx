import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  RegularLinkText,
  SmallText,
  Wrapper,
  BigText,
  TextWrapper,
  InputsWrapper,
  LabelPlaceholderWrapper,
  Button,
  TextButton,
  ButtonWrapper,
  TitleInputWrapper,
  Input,
  InputSenha,
  Content,
  LabelIsVisible,
} from './styles';
import ErrorModal from '../../components/fail';
import {UserLogin} from '../../api/UserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import analytics from "@react-native-firebase/analytics"

const Login = () => {
  const [cpf, setCpf] = useState('');

  const [password, setPassword] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const handlePasswordIsVisible = () => {
      setPasswordIsVisible(!passwordIsVisible);
  };

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  const handleLogin = () => {
    UserLogin({
      cpf: cpf.replace(/[^\w\s]/gi, ''),
      senha: password,
    })
      .then(async (res: any) => {
        if (res.status == 201) {
          AsyncStorage.setItem('AccessToken', res.data.token);
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'App',
              },
            ],
          });
        await analytics().logEvent('Login', {
          id:res.data.id
        })
        }
        if (res.status != 201) {
          handleOpenModal();
          setErrorMessage(res.response.data.message);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!modalIsVisible) {
      setPassword('');
    }
  }, [modalIsVisible]);

  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        {modalIsVisible && (
          <ErrorModal
            ModalTitle={'Atenção'}
            ModalSubtitle={errorMessage}
            isVisible={modalIsVisible}
            setIsVisible={setModalIsVisible}>
          </ErrorModal>
        )}
        <Wrapper>
          <Image
            source={require('../../../assets/logo_rub_welcome.png')}
            style={{
              resizeMode: 'contain',
              height: 28,
              width: 134,
            }}
          />

          <TitleInputWrapper>
            <TextWrapper>
              <BigText>Olá,</BigText>
              <SmallText>Para acessar digite sua senha</SmallText>
            </TextWrapper>

            <InputsWrapper>
              <LabelPlaceholderWrapper>
                <SmallText>CPF</SmallText>
                <Input
                  placeholder="Insira seu CPF aqui"
                  placeholderTextColor="rgba(170, 171, 171, 1)"
                  keyboardType="numeric"
                  onChangeText={text => setCpf(text)}
                  maxLength={14}
                  type={'cpf'}
                  value={cpf}></Input>
              </LabelPlaceholderWrapper>

              <LabelPlaceholderWrapper>
                <SmallText>Senha</SmallText>
                <LabelIsVisible>
                  <InputSenha
                    placeholder="Insira sua senha"
                    placeholderTextColor="rgba(170, 171, 171, 1)"
                    keyboardType="default"
                    value={password}
                    secureTextEntry={passwordIsVisible}
                    onChangeText={setPassword}></InputSenha>
                  <TouchableOpacity onPress={handlePasswordIsVisible}>
                    {passwordIsVisible ? (
                      <Image
                        source={require('../../../assets/eye.png')}
                        style={{
                          height: 25,
                          width: 25,
                          right: 36,
                        }}
                      />
                    ) : (
                      <Image
                        source={require('../../../assets/eye-off.png')}
                        style={{
                          height: 25,
                          width: 25,
                          right: 36,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </LabelIsVisible>
              </LabelPlaceholderWrapper>

              <TouchableOpacity>
                <RegularLinkText>Esqueceu a sua senha?</RegularLinkText>
              </TouchableOpacity>
            </InputsWrapper>
          </TitleInputWrapper>
        </Wrapper>

        <ButtonWrapper>
          <Button onPress={handleLogin}>
            <TextButton>CONFIRMAR</TextButton>
          </Button>

          <TouchableOpacity
            onPress={async () => {await analytics().logEvent('Onboarding_Try'), navigation.navigate('Onboarding') }}>
            <RegularLinkText>Não tem uma conta? Cadastre-se!</RegularLinkText>
          </TouchableOpacity>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default Login;
