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
} from '../global-styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import PasswordRules from '../../../components/password-rules';

const AppPasswordScreen = () => {
  const navigation = useNavigation()


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
          <TouchableOpacity onPress={()=> navigation.navigate('PasswordRules')}>
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
          />
        </InputLabel>
        <InputLabel>
          <Label>
            Confirme sua <Strong>senha</Strong>
          </Label>
          <NoMaskInput 
            keyboardType="default"
            secureTextEntry={true}
          />
        </InputLabel>
      </Wrap>
      <ButtonView>
        <Button onPress={()=>navigation.navigate('OnboardingTransaction')}>
          <TextButton>CONFIRMAR</TextButton>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default AppPasswordScreen;
