import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  WhiteBoard,
  Content,
  Header,
  Title,
  AuxView,
  InputLabel,
  Label,
  Wrap,
  ButtonView,
  Button,
  TextButton,
  PasswordInfoText,
  PasswordInfo,
  Strong,
  NoMaskInput,
  BlackTitle,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import SuccessNoButton from '../../components/success-no-button';
import { useState } from 'react';

const PasswordAlt = () => {
  const navigation = useNavigation();
  const [success, setSuccess] = useState(false);


  const handleOpenSuccess = () => {
    setSuccess(true);
  };


  return (
    <Container>
        {success && (
        <SuccessNoButton
          isVisible={success}
          setIsVisible={setSuccess}
          title={'Alterações realizadas'}
        />
      )}
      <Header>
        <Image
          source={require('../../../assets/wave.png')}
          style={{
            position: 'absolute',
            top: 10,
            left: -36,
            height: 220,
            width: '100%',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <Title>Alteraração de Senha</Title>
        <AuxView />
      </Header>
      <Content>
        <WhiteBoard>
          <Wrap>
              <BlackTitle>
                Digite sua nova senha para entrar no aplicativo
              </BlackTitle>
              <TouchableOpacity
                onPress={() => navigation.navigate('PasswordRules')}>
                <PasswordInfo>
                  <Image source={require('../../../assets/i.png')} />
                  <PasswordInfoText>
                    Como criar uma senha segura
                  </PasswordInfoText>
                </PasswordInfo>
              </TouchableOpacity>
            <InputLabel>
              <Label>
                Digite sua <Strong>senha</Strong>
              </Label>
              <NoMaskInput keyboardType="default" secureTextEntry={true} />
            </InputLabel>
            <InputLabel>
              <Label>
                Confirme sua <Strong>senha</Strong>
              </Label>
              <NoMaskInput keyboardType="default" secureTextEntry={true} />
            </InputLabel>
          </Wrap>
          <ButtonView>
            <Button onPress={handleOpenSuccess}>
              <TextButton>CONFIRMAR</TextButton>
            </Button>
          </ButtonView>
        </WhiteBoard>
      </Content>
    </Container>
  );
};

export default PasswordAlt;
