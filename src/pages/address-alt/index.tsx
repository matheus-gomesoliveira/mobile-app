import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  WhiteBoard,
  Content,
  Header,
  Title,
  AuxView,
  InputLabel,
  Label,
  Input,
  NoMaskInput,
  SameLineInputs,
  InputLabelBox,
  SmallInput,
  InputLabelBigBox,
  InputLabelSmallBox,
  ButtonView,
  Button,
  ButtonTitle,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import SuccessNoButton from '../../components/success-no-button';

const AddressAlt = () => {
  const navigation = useNavigation();
  const [success, setSuccess] = useState(false);

  const handleCloseSuccess = () => {
    setSuccess(false);
  };


  const handleOpenSuccess = () => {
    setSuccess(true);
    handleCloseSuccess;
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
        <Title>Alteraração de Endereço</Title>
        <AuxView />
      </Header>
      <Content>
        <WhiteBoard>
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
                  <NoMaskInput keyboardType="default" />
                </InputLabel>
              </InputLabelSmallBox>
            </SameLineInputs>
          </ScrollView>
          <ButtonView>
            <Button onPress={handleOpenSuccess}>
              <ButtonTitle>CONFIRMAR</ButtonTitle>
            </Button>
          </ButtonView>
        </WhiteBoard>
      </Content>
    </Container>
  );
};

export default AddressAlt;
