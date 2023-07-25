import {Text, TextInput, View} from 'react-native';
import {
  Button,
  ButtonTitle,
  ButtonView,
  Container,
  Input,
  InputRow,
  Wrap,
} from './styles';
import {useContext, useRef, useState} from 'react';
import {Transfer, TransferData, getTransfer} from '../../api/AccountApi';
import {TransferContext} from '../../context/TransferContext';
import ErrorModal from '../fail';
import Success from '../success';
import {ButtonText} from '../../pages/bank-data/styles';
import { useNavigation } from '@react-navigation/native';
import Loading from '../loading';
import Payment from '../payment';
import { UserContext } from '../../context/AppContext';

const PassConfirm = () => {
  const navigation = useNavigation()

  const [password, setPassword] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [successIsVisible, setSuccessIsVisible] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const[loadingPayment, setLoadingPayment] = useState(false)

  const [payment, setPayment] = useState(false)

  const [id, setId] = useState('')

  const[origin_name, setOriginName] = useState('')
  const[origin_cpf, setOriginCpf] = useState('')
  const[origin_account, setOriginAccount] = useState('')
  const[destiny_name, setDestinyName] = useState('')
  const[destiny_cpf, setDestinyCpf] = useState('')
  const[destiny_account, setDestinyAccount] = useState('')
  const[amount, setAmount] = useState('')
  const[type,setType] = useState('')
  const[date, setDate] = useState('')
  const[time, setTime] = useState('')

  const {transfer} = useContext(TransferContext);
  const {userData, setUserData} = useContext(UserContext)
  const {conta} = userData

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (index: number, text: string) => {
    const updatedPassword =
      password.substring(0, index) + text + password.substring(index + 1);
    setPassword(updatedPassword);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (text.length === 0 && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }

    setPassword(updatedPassword);
  };

  function formattedValue(valor: string | undefined) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(Number(valor));
  }

  

  const getTransferData = async ()=>{
    try{
    setLoadingPayment(true)
    const res = await getTransfer(id)
    if(res){
      setOriginName(res.transferencia.nome_origem)
      setOriginCpf(res.transferencia.cpf_origem)
      setOriginAccount(res.transferencia.conta_origem.toString())

      setDestinyName(res.transferencia.nome_destino)
      setDestinyCpf(res.transferencia.cpf_destino)
      setDestinyAccount(res.transferencia.conta_destino.toString())
      
      setDate(res.transferencia.data_transferencia.dia)
      setTime(res.transferencia.data_transferencia.hora)

      setType(res.transferencia.tipo)
      const value = formattedValue(res.transferencia.valor)

      setAmount(value)

      setPayment(true)
    }
  } catch (e) {
    console.log(e)
  } finally{
    const newBalance = conta?.saldo ? parseFloat(conta?.saldo) - parseFloat(amount): 0 
    setUserData({
      ...userData,
      conta:{
        ...userData.conta,
        saldo:String(newBalance)
      }
    })
    setLoadingPayment(false)
  }
}

  const handleConfirm = async () => {
    if (transfer) {
      const data: TransferData = {
        destino: transfer.destino,
        valor: transfer.valor,
        senha_transacional: password,
        descricao: transfer.descricao ? transfer.descricao : '',
      };
      const res = await Transfer(data);
      if (res) {
        if (res.id) {
          setSuccessIsVisible(true);
          setId(res.id)
        } else {
          setModalIsVisible(true);
          setErrorMessage(res.message);
          console.log('erro:', res.message);
        }
      }
    }
  };
  return (
    <Container>
      {loadingPayment? <Loading/> : payment && (
          <Payment
            origin_name={origin_name}
            origin_cpf={origin_cpf}
            origin_account={origin_account}
            destiny_name={destiny_name}
            destiny_cpf={destiny_cpf}
            destiny_account={destiny_account}
            amount={amount}
            tipo={type}
            date={date}
            time={time}
            isVisivble={modalIsVisible}
            setIsVisible={setModalIsVisible}
            navigate='Home'
          />
        )}
      {modalIsVisible && (
        <ErrorModal
          isVisible={modalIsVisible}
          setIsVisible={setModalIsVisible}
          ModalTitle={'Atenção'}
          ModalSubtitle={errorMessage}
        />
      )}
      {successIsVisible && (
        <Success
          isVisible={successIsVisible}
          setIsVisible={setSuccessIsVisible}
          title={'Transferência enviada com sucesso'}>
          <ButtonView>
            <Button onPress={getTransferData}>
              <ButtonTitle>ENVIAR COMPROVANTE</ButtonTitle>
            </Button>
          </ButtonView>
        </Success>
      )}
      <Wrap>
        <Text>Confirme sua senha do cartão atual</Text>
        <InputRow>
          <Input
            secureTextEntry={true}
            maxLength={1}
            onChangeText={text => handleInputChange(0, text)}
            ref={ref => (inputRefs.current[0] = ref)}
            keyboardType='numeric'
          />
          <Input
            secureTextEntry={true}
            maxLength={1}
            onChangeText={text => handleInputChange(1, text)}
            ref={ref => (inputRefs.current[1] = ref)}
            keyboardType='numeric'
          />
          <Input
            secureTextEntry={true}
            maxLength={1}
            onChangeText={text => handleInputChange(2, text)}
            ref={ref => (inputRefs.current[2] = ref)}
            keyboardType='numeric'
          />
          <Input
            secureTextEntry={true}
            maxLength={1}
            onChangeText={text => handleInputChange(3, text)}
            ref={ref => (inputRefs.current[3] = ref)}
            keyboardType='numeric'
          />
        </InputRow>
      </Wrap>
      <ButtonView>
        <Button onPress={handleConfirm}>
          <ButtonTitle>CONTINUAR</ButtonTitle>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default PassConfirm;
