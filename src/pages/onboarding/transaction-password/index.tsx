import {Image, TouchableOpacity} from 'react-native';
import {
  BarStatus,
  Button,
  ButtonView,
  TextButton,
  Container,
  Header,
  InputLabel,
  Label,
  NoMaskInput,
  PasswordInfo,
  PasswordInfoText,
  StatusBar,
  Strong,
  Title,
  Wrap,
  Error,
  SmallText,
} from '../global-styles';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import Success from '../../../components/success';
import {Account, OnboardingContext} from '../../../context/OnboardingContext';
import { Onboarding } from '../../../api/UserApi';

const TransactionPasswordScreen = () => {
  const navigation = useNavigation();

  const {onboardingData, setOnboardingData} = useContext(OnboardingContext);
  const {usuario, endereco, conta_bancaria} = onboardingData

  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isPassword, setIsPassword] = useState(true);

  const disabled = !password || !confirm;

  var regexSenhaTransacional = /^\d{4}$/;

  const passwordValidation = regexSenhaTransacional.test(password);
  const passMatch: boolean = password == confirm;

  const handleOpenSuccess = () => {
    setSuccess(true);
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'Welcome',
        },
      ],
    });
  };

  const handleConfirm = async () => {
    if (passMatch) {
      if (passwordValidation) {
        setIsPassword(true);
        const updatedAccountData: Account = {
          senha_transacional: password,
        };
        setOnboardingData(prevData => ({
          ...prevData,
          conta_bancaria: updatedAccountData,
        }));
        const res = await Onboarding({
          usuario:{
            nome_completo:usuario?.nome_completo,
            telefone:usuario?.telefone,     
            email:usuario?.email,
            cpf:usuario?.cpf,
            senha:usuario?.senha,
            data_nascimento:usuario?.data_nascimento,
            endereco:{
              cep:endereco?.cep,
              rua:endereco?.rua,
              bairro:endereco?.bairro,
              cidade:endereco?.cidade,
              numero:endereco?.numero,
              uf:endereco?.uf,
              complemento:endereco?.complemento,
            },
            conta_bancaria:{
              senha_transacional:password
            }
          }
        })
        if(res?.status == 201){
          handleOpenSuccess();
          console.log(onboardingData);
        }
        else
          console.log('e')
      } else {
        setIsPassword(false);
        setPassword('')
        setConfirm('')
      }
    }
  };



  return (
    <Container>
      {success && (
        <Success
          isVisible={success}
          setIsVisible={setSuccess}
          title={'Sua conta digital RubBank foi criada com sucesso!'}
          firstSubtitle={'Vamos avaliar seu cadastro e validar sua conta.'}
          secondSubtitle={'Acesse agora com seu CPF e senha cadastrados'}>
          <ButtonView>
            <Button onPress={handleCloseSuccess} isLogin={true}>
              <TextButton>FAZER LOGIN</TextButton>
            </Button>
          </ButtonView>
        </Success>
      )}
      <Wrap>
        <Header>
          <StatusBar>
            <BarStatus />
            <BarStatus />
            <BarStatus />
            <BarStatus />
          </StatusBar>
          <Title>Digite qual será sua senha para efetuar transações</Title>
          <TouchableOpacity>
            <PasswordInfo>
              <Image source={require('../../../../assets/i.png')} />
              <PasswordInfoText>Senha numérica de 4 dígitos</PasswordInfoText>
            </PasswordInfo>
          </TouchableOpacity>
        </Header>
        <InputLabel>
          <Label>
            Digite sua <Strong>senha</Strong>
          </Label>
          <NoMaskInput
            keyboardType="numeric"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            maxLength={4}
          />
          {!isPassword && (
            <Error>
              <SmallText>Senha inválida, sua senha deve ter apenas 4 caracteres alfa numéricos</SmallText>
            </Error>
          )}
        </InputLabel>
        <InputLabel>
          <Label>
            Confirme sua <Strong>senha</Strong>
          </Label>
          <NoMaskInput
            keyboardType="numeric"
            secureTextEntry={true}
            value={confirm}
            onChangeText={setConfirm}
            maxLength={4}
          />
          {!passMatch && (
            <Error>
              <SmallText>As senhas devem coincidir</SmallText>
            </Error>
          )}
        </InputLabel>
      </Wrap>
      <ButtonView>
        <Button
          onPress={handleConfirm}
          disabled={disabled}
          style={{
            opacity: disabled ? 0.4 : 1,
          }}>
          <TextButton>CONFIRMAR</TextButton>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default TransactionPasswordScreen;
