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
  SmallText,
  Error,
} from '../global-styles';
import {useNavigation} from '@react-navigation/native';
import {useContext, useState} from 'react';
import {OnboardingContext, User} from '../../../context/OnboardingContext';

const AppPasswordScreen = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState('');

  const {onboardingData, setOnboardingData} = useContext(OnboardingContext);

  const {usuario} = onboardingData;

  const passMatch: boolean = password == confirmPassword;

  const disabled = !password || !confirmPassword;

  var regexSenha =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const passwordValidation: boolean = regexSenha.test(password);

  const handleConfirm = async () => {
    if (passMatch) {
      if (passwordValidation) {
        setIsPassword(true);
        const updatedUserData: any = {
          ...usuario,
          senha: password,
        };
        setOnboardingData(prevData => ({
          ...prevData,
          usuario: updatedUserData,
        }));
        console.log(onboardingData);
        navigation.navigate('OnboardingTransaction');
      } else {
        setIsPassword(false);
      }
    }
  };

  return (
    <Container>
      <Wrap>
        <Header>
          <StatusBar>
            <BarStatus />
            <BarStatus />
            <BarStatus />
          </StatusBar>
          <Title>Digite qual será sua senha para entrar no aplicativo</Title>
          <TouchableOpacity
            onPress={() => navigation.navigate('PasswordRules')}>
            <PasswordInfo>
              <Image source={require('../../../../assets/i.png')} style={{}} />
              <PasswordInfoText>Como criar uma senha segura</PasswordInfoText>
            </PasswordInfo>
          </TouchableOpacity>
        </Header>
        <InputLabel>
          <Label>
            Digite sua <Strong>senha</Strong>
          </Label>
          <NoMaskInput
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {!isPassword && (
            <TouchableOpacity onPress={() => navigation.navigate('PasswordRules')}>
              <Error>
                <SmallText>
                  Senha inválida verifique 
                  <Strong> Como criar uma senha segura</Strong>
                </SmallText>
              </Error>
            </TouchableOpacity>

          )}
        </InputLabel>
        <InputLabel>
          <Label>
            Confirme sua <Strong>senha</Strong>
          </Label>
          <NoMaskInput
            keyboardType="default"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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

export default AppPasswordScreen;
