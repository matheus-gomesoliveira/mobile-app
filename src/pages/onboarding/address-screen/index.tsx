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
import { useNavigation } from '@react-navigation/native';

export const AddressScreen = () => {
  const navigation = useNavigation()
  
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
            />
        </InputLabel>
        <InputLabel>
            <Label>Endereço*</Label>
            <NoMaskInput
            placeholder="Insira o nome da rua"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
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
                />
                </InputLabel>
            </InputLabelBigBox>
            <InputLabelSmallBox>
                <InputLabel>
                    <Label>UF*</Label>
                    <NoMaskInput
                        keyboardType="default"
                    />
                </InputLabel>
            </InputLabelSmallBox>
        </SameLineInputs>
      </ScrollView>
      <ButtonView>
        <Button onPress={()=>navigation.navigate('OnboardingPassword')}>
          <ButtonTitle>CONFIRMAR</ButtonTitle>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default AddressScreen;
