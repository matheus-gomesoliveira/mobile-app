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
import {useContext, useState} from 'react';
import SuccessNoButton from '../../components/success-no-button';
import {
  Account,
  Address,
  User,
  UserContext,
  UserData,
} from '../../context/AppContext';
import ViaCep from '../../api/ViaCep';
import {changeAdressData, GetUserData} from '../../api/UserApi';
import ErrorModal from '../../components/fail';
import { AxiosError } from 'axios';

const AddressAlt = () => {
  const navigation = useNavigation();
  const [success, setSuccess] = useState(false);
  const {userData, setUserData} = useContext(UserContext);
  const {usuario, endereco, conta} = userData;
  const [cep, setCep] = useState(endereco?.cep);
  const [rua, setRua] = useState(endereco?.rua);
  const [numero, setNumero] = useState(endereco?.numero);
  const [complemento, setComplemeto] = useState(endereco?.complemento);
  const [bairro, setBairro] = useState(endereco?.bairro);
  const [cidade, setCidade] = useState(endereco?.cidade);
  const [UF, setUF] = useState(endereco?.uf);

  const [editable, setEditable] = useState(false);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const isNotClickable = !cep || !rua || !numero || !bairro || !cidade || !UF;

  const setDataByCep = async () => {
    try {
      const res = await ViaCep(cep);
      setRua(res?.data.logradouro);
      setNumero('');
      setComplemeto('');
      setBairro(res?.data.bairro);
      setCidade(res?.data.localidade);
      setUF(res?.data.uf);
      if (!res?.data.logradouro || !res?.data.bairro) {
        setEditable(true);
      } else {
        setEditable(false);
      }
      console.log(res?.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async () => {
    try {
      const res = await GetUserData();
      console.log(res?.data);
      const jsonString = JSON.stringify(res?.data);
      const {endereco} = JSON.parse(jsonString);

      const updatedUserData: UserData = {
        usuario: usuario as User,
        endereco: endereco as Address,
        conta: conta as Account,
      };
      setUserData(updatedUserData);
    } catch (e) {
      console.log(e);
    }
  };

  const formattedCep = cep?.replace(/[^\w\s]/gi, '');

  const handleAlteration = async () => {
    try {
      await changeAdressData({
        cep: formattedCep,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        numero: numero,
        uf: UF,
        complemento: complemento,
      });
      setSuccess(true);
      await getUser();
    } catch (e:any) {
      setModalIsVisible(true);
      setErrorMessage(e.toString());
      console.log(e);
    }
  };

  return (
    <Container>
      {modalIsVisible && (
        <ErrorModal
          ModalTitle={'Atenção'}
          ModalSubtitle={errorMessage}
          isVisible={modalIsVisible}
          setIsVisible={setModalIsVisible}
        />
      )}
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
                value={cep}
                onChangeText={setCep}
                editable={true}
                onBlur={() => setDataByCep()}
              />
            </InputLabel>
            <InputLabel>
              <Label>Endereço*</Label>
              <NoMaskInput
                placeholder="Insira o nome da rua"
                placeholderTextColor="rgba(170, 171, 171, 1)"
                keyboardType="default"
                editable={editable}
                value={rua}
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
                    editable={true}
                    value={numero}
                    onChangeText={setNumero}
                  />
                </InputLabel>
              </InputLabelBox>
              <InputLabelBox>
                <InputLabel>
                  <Label>Complemento</Label>
                  <SmallInput
                    placeholder="Insira o complemento"
                    placeholderTextColor="rgba(170, 171, 171, 1)"
                    keyboardType="default"
                    editable={true}
                    onChangeText={setComplemeto}
                    value={complemento}
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
                editable={editable}
                value={bairro}
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
                    editable={false}
                    value={cidade}
                  />
                </InputLabel>
              </InputLabelBigBox>
              <InputLabelSmallBox>
                <InputLabel>
                  <Label>UF*</Label>
                  <NoMaskInput
                    keyboardType="default"
                    editable={false}
                    value={UF}
                  />
                </InputLabel>
              </InputLabelSmallBox>
            </SameLineInputs>
          </ScrollView>
          <ButtonView>
            <Button
              onPress={handleAlteration}
              disabled={isNotClickable}
              style={{
                opacity: isNotClickable ? 0.4 : 1,
              }}>
              <ButtonTitle>CONFIRMAR</ButtonTitle>
            </Button>
          </ButtonView>
        </WhiteBoard>
      </Content>
    </Container>
  );
};

export default AddressAlt;
