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
import Success from '../../../components/success';

const TransactionPasswordScreen = () => {
  const navigation = useNavigation()

const [success, setSuccess] = useState(false)

const handleOpenSuccess = ()=>{
  setSuccess(true)
}

const handleCloseSuccess = ()=>{
  setSuccess(false)
  navigation.reset({
    index:1,
    routes:[{
      name:'Welcome'
    }]

  })
}

  return (
    <Container>
      {success &&(
        <Success
          isVisible={success}
          setIsVisible={setSuccess}
          title={'Sua conta digital RubBank foi criada com sucesso!'}
          firstSubtitle={'Vamos avaliar seu cadastro e validar sua conta.'}
          secondSubtitle={'Acesse agora com seu CPF e senha cadastrados'}
        >
          <ButtonView>
            <Button
             onPress={handleCloseSuccess} 
             isLogin={true}
             >
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
          />
        </InputLabel>
        <InputLabel>
          <Label>
            Confirme sua <Strong>senha</Strong>
          </Label>
          <NoMaskInput 
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </InputLabel>
      </Wrap>
      <ButtonView>
        <Button onPress={handleOpenSuccess}>
          <TextButton>CONFIRMAR</TextButton>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default TransactionPasswordScreen