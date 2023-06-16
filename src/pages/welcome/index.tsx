import React from 'react';
import {Image} from 'react-native';
import {
  BoldText,
  Button,
  Container,
  RegularText,
  TextButton,
  Wrapper,
  TextWrapper,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../../assets/logo_rub_welcome.png')}
        style={{
          height: 40,
          width: 195,
        }}
      />

      <Wrapper>
        <TextWrapper>
          <BoldText>Bem-vindo ao RubBank!</BoldText>
          <RegularText>Sua conta digital, sem burocracia.</RegularText>
        </TextWrapper>

        <Button onPress={() => navigation.navigate('Login')}>
          <TextButton>COMEÇAR</TextButton>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
