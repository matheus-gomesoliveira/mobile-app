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
import {Address, OnboardingContext} from '../../../context/OnboardingContext';
import ViaCep from '../../../api/ViaCep';

export const AddressScreen = () => {
  const navigation = useNavigation();

  const {onboardingData, setOnboardingData} = useContext(OnboardingContext);
  const {endereco} = onboardingData;

  const [cep, setCep] = useState(endereco?.cep);
  const [rua, setRua] = useState(endereco?.rua);
  const [numero, setNumero] = useState(endereco?.numero);
  const [complemento, setComplemento] = useState(endereco?.complemento);
  const [bairro, setBairro] = useState(endereco?.bairro);
  const [cidade, setCidade] = useState(endereco?.cidade);
  const [UF, setUF] = useState(endereco?.uf);

  const [editable, setEditable] = useState(false);

  const disabled =
    !numero ||
    !cep ||
    !rua ||
    !bairro ||
    !cidade ||
    !UF;

  const setDataByCep = async () => {
    try {
      const res = await ViaCep(endereco?.cep);
      setRua(res?.data.logradouro);
      setNumero('');
      setComplemento('');
      setBairro(res?.data.bairro);
      setCidade(res?.data.localidade);
      setUF(res?.data.uf);
      if (!res?.data.logradouro || !res?.data.bairro) {
        setEditable(true);
      } else {
        setEditable(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleConfirm = () => {
    const updatedAdressData: Address = {
      cep: cep?.replace(/[^\w]/g, ''),
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      numero: numero,
      uf: UF,
      complemento: complemento,
    };

    setOnboardingData(prevData => ({
      ...prevData,
      endereco: updatedAdressData,
    }));
    navigation.navigate('OnboardingPassword');
    console.log(onboardingData);

  };

  useEffect(() => {
    setDataByCep();
  }, []);

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
            value={cep}
            editable={false}
          />
        </InputLabel>
        <InputLabel>
          <Label>Endereço*</Label>
          <NoMaskInput
            placeholder="Insira o nome da rua"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
            value={rua}
            onChangeText={setRua}
            editable={editable}
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
                onChangeText={setNumero}
                value={numero}
                editable={true}
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
                value={complemento}
                onChangeText={setComplemento}
                editable={true}
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
            value={bairro}
            onChangeText={setBairro}
            editable={editable}
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
                value={cidade}
                editable={false}
              />
            </InputLabel>
          </InputLabelBigBox>
          <InputLabelSmallBox>
            <InputLabel>
              <Label>UF*</Label>
              <NoMaskInput
                keyboardType="default"
                value={UF}
                editable={false}
              />
            </InputLabel>
          </InputLabelSmallBox>
        </SameLineInputs>
      </ScrollView>
      <ButtonView>
        <Button
          onPress={handleConfirm}
          disabled={disabled}
          style={{
            opacity: disabled ? 0.4 : 1,
          }}>
          <ButtonTitle>CONFIRMAR</ButtonTitle>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default AddressScreen;
