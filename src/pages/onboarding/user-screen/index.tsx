import {ScrollView} from 'react-native';
import {
  BarStatus,
  Button,
  ButtonView,
  Container,
  Header,
  Input,
  InputLabel,
  Label,
  NoMaskInput,
  SmallText,
  StatusBar,
  TextButton,
  Title,
  Error,
  ButtonTitle,
  LogInButton,
} from '../global-styles';
import {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {OnboardingContext} from '../../../context/OnboardingContext';
import {validateOnboardingData} from '../../../api/UserApi';
import ErrorModal from '../../../components/fail';

const UserScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isCpf, setIsCpf] = useState(true);
  const [isBirth, setIsBirth] = useState(true);

  const {onboardingData, setOnboardingData} = useContext(OnboardingContext);

  var regexNome =
    /^[[a-zA-Z\u00C0-\u00FF ]{3,}(?: [a-zA-Z\u00C0-\u00FF ]+){1,}$/;
  var regexTelefone = /^[0-9]+$/;
  var regexTelefoneDDD =
    /^(11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)/;
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameValidation: boolean = regexNome.test(name);
  const emailValidation: boolean = regexEmail.test(email);
  const phoneValidation: boolean =
    regexTelefone.test(phone.replace(/[^\w\s]/gi, '')) ||
    regexTelefoneDDD.test(phone.replace(/[^\w\s]/gi, ''));
  const cpfValidation: boolean = validacaoCPFdigito(cpf);

  function validacaoCPFdigito(cpf: string): boolean {
    var cpf: string = cpf.replace(/[.\-|]/g, '');
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }

  const disabled = !name || !email || !phone || !cpf || !birth;

  function formatBirthday(birthday: string) {
    const [day, month, year] = birthday.split('/');
    const formattedBirthday = `${year}-${month.padStart(2, '0')}-${day.padStart(
      2,
      '0',
    )}`;
    return formattedBirthday;
  }

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  const handleConfirm = async () => {
    if (nameValidation) {
      setIsName(true);
      if (emailValidation) {
        setIsEmail(true);
        if (phoneValidation) {
          setIsPhone(true);
          if (cpfValidation) {
            setIsCpf(true);
            const res: any = await validateOnboardingData({
              cpf: cpf.replace(/[^\w]/g, ''),
              email: email,
              phone: phone.replace(/[^\w]/g, ''),
            });
            if (res?.status == 200) {
              const newUser = {
                nome_completo: name,
                telefone: phone.replace(/[^\w]/g, ''),
                email: email,
                cpf: cpf.replace(/[^\w]/g, ''),
                senha: '',
                data_nascimento: formatBirthday(birth),
              };
              setOnboardingData(prevData => ({
                ...prevData,
                usuario: newUser,
              }));
              navigation.navigate('OnboardingCep');
            }
            if (res?.status != 200) {
              handleOpenModal();
              setErrorMessage(res.response.data.message);
            }
          } else {
            setIsCpf(false);
          }
        } else {
          setIsPhone(false);
        }
      } else {
        setIsEmail(false);
      }
    } else {
      setIsName(false);
    }
  };

  const navigation = useNavigation();

  return (
    <Container>
      {modalIsVisible && (
        <ErrorModal
          ModalTitle={'Atenção'}
          ModalSubtitle={errorMessage}
          isVisible={modalIsVisible}
          setIsVisible={setModalIsVisible}>
          <LogInButton onPress={() => navigation.navigate('Login')}>
            <ButtonTitle>FAZER LOGIN</ButtonTitle>
          </LogInButton>
        </ErrorModal>
      )}
      <Header>
        <StatusBar>
          <BarStatus />
        </StatusBar>
        <Title>Preencha abaixo com seus dados pessoais</Title>
      </Header>
      <ScrollView>
        <InputLabel>
          <Label>Nome Completo*</Label>
          <NoMaskInput
            placeholder="Insira seu nome"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
            onChangeText={setName}
            value={name}
          />
          {!isName && (
            <Error>
              <SmallText>Insira seu nome e sobrenome</SmallText>
            </Error>
          )}
        </InputLabel>

        <InputLabel>
          <Label>E-mail*</Label>
          <NoMaskInput
            placeholder="exemplo@email.com"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="default"
            onChangeText={setEmail}
            value={email}
          />
          {!isEmail && (
            <Error>
              <SmallText>Insira um e-mail válido</SmallText>
            </Error>
          )}
        </InputLabel>

        <InputLabel>
          <Label>Telefone*</Label>
          <Input
            placeholder="(99)99999-9999"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="numeric"
            type={'cel-phone'}
            onChangeText={text => setPhone(text)}
            value={phone}
          />
          {!isPhone && (
            <Error>
              <SmallText>Insira um telefone válido</SmallText>
            </Error>
          )}
        </InputLabel>

        <InputLabel>
          <Label>CPF*</Label>
          <Input
            placeholder="123.456.789-10"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="numeric"
            type={'cpf'}
            onChangeText={text => setCpf(text)}
            value={cpf}
          />
          {!isCpf && (
            <Error>
              <SmallText>Insira um cpf válido</SmallText>
            </Error>
          )}
        </InputLabel>

        <InputLabel>
          <Label>Data de Nascimento</Label>
          <Input
            placeholder="DD/MM/AAAA"
            placeholderTextColor="rgba(170, 171, 171, 1)"
            keyboardType="numeric"
            type={'datetime'}
            onChangeText={text => setBirth(text)}
            value={birth}
            maxLength={10}
          />
        </InputLabel>
      </ScrollView>
      <ButtonView>
        <Button
          onPress={handleConfirm}
          disabled={disabled}
          style={{
            opacity: disabled ? 0.4 : 1,
          }}>
          <TextButton>CONFIRMAR</TextButton>
        </Button>
      </ButtonView>
    </Container>
  );
};

export default UserScreen;
