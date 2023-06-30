import {ScrollView} from 'react-native';
import {ButtonTitle} from '../../dashboard/styles';
import {
  BarStatus,
  Button,
  ButtonView,
  Container,
  Header,
  Input,
  InputLabel,
  InputLabelBigBox,
  InputLabelBox,
  InputLabelSmallBox,
  Label,
  NoMaskInput,
  SameLineInputs,
  SmallInput,
  StatusBar,
  Strong,
  Title,
} from '../global-styles';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {OnboardingContext} from '../../../context/OnboardingContext';

export const AddressScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState('')


  const {onboardingData, setOnboardingData} = useContext(OnboardingContext);

  const {endereco} = onboardingData;

  console.log(onboardingData)
  console.log(endereco?.endereco)


  return (
    <Container>
      <Header>
        <StatusBar>
          <BarStatus />
          <BarStatus />
        </StatusBar>
        <Title>
          Preencha o <Strong>número</Strong> e o <Strong>complemento.</Strong>
        </Title>
      </Header>
      <ScrollView>
        <InputLabel>
          <Label>CEP*</Label>
          <Input
            placeholder="Insira seu CEP"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
            type={'zip-code'}
            value={endereco?.cep}
          />
        </InputLabel>
        <InputLabel>
          <Label>Endereço*</Label>
          <NoMaskInput
            placeholder="Insira o nome da rua"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
            value={endereco?.endereco}
          />
        </InputLabel>
        <SameLineInputs>
          <InputLabelBox>
            <InputLabel>
              <Label>Número*</Label>
              <SmallInput
                placeholder="Insira o número"
                placeholderTextColor="rgba(170, 171, 171, 1)"
                keyboardType="default"
                value={number}
              />
            </InputLabel>
          </InputLabelBox>
          <InputLabelBox>
            <InputLabel>
              <Label>Complemento*</Label>
              <SmallInput
                placeholder="Insira o complemento"
                placeholderTextColor="rgba(170, 171, 171, 1)"
                keyboardType="default"
                value={endereco?.complemento}
              />
            </InputLabel>
          </InputLabelBox>
        </SameLineInputs>
        <InputLabel>
          <Label>Bairro*</Label>
          <NoMaskInput
            placeholder="Insira o bairro"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
            value={endereco?.bairro}
          />
        </InputLabel>
        <SameLineInputs>
          <InputLabelBigBox>
            <InputLabel>
              <Label>Cidade*</Label>
              <NoMaskInput
                placeholder="Insira a cidade"
                placeholderTextColor="rgba(170, 171, 171, 1)"
                keyboardType="default"
                value={endereco?.cidade}
              />
            </InputLabel>
          </InputLabelBigBox>
          <InputLabelSmallBox>
            <InputLabel>
              <Label>UF*</Label>
              <NoMaskInput 
                keyboardType="default"
                value={endereco?.uf}
              />
            </InputLabel>
          </InputLabelSmallBox>
        </SameLineInputs>
      </ScrollView>
      <ButtonView>
        <Button onPress={() => navigation.navigate('OnboardingPassword')}>
          <ButtonTitle>CONFIRMAR</ButtonTitle>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default AddressScreen;
