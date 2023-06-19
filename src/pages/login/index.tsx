import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
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
} from './styles';
import ErrorModal from '../../components/fail';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  useEffect(() => {
    if (!modalIsVisible) {
      setCpf('');
      setPassword('');
    }
  }, [modalIsVisible]);

  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        {modalIsVisible && (
          <ErrorModal
            ModalTitle={'Titulo do Erro'}
            ModalSubtitle={'Descrição do erro'}
            isVisible={modalIsVisible}
            setIsVisible={setModalIsVisible}
          />
        )}
        <Wrapper>
          <Image
            source={require('../../../assets/logo_rub_welcome.png')}
            style={{
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
                <InputSenha
                  placeholder="Insira sua senha"
                  placeholderTextColor="rgba(170, 171, 171, 1)"
                  keyboardType="default"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={setPassword}></InputSenha>
              </LabelPlaceholderWrapper>

              <RegularLinkText>Esqueceu a sua senha?</RegularLinkText>
            </InputsWrapper>
          </TitleInputWrapper>
        </Wrapper>

        <ButtonWrapper>
          <Button onPress={handleOpenModal}>
            <TextButton>CONFIRMAR</TextButton>
          </Button>
          <RegularLinkText>Não tem uma conta? Cadastre-se!</RegularLinkText>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default Login;
