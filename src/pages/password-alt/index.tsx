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
  Wrap,
  ButtonView,
  Button,
  TextButton,
  PasswordInfoText,
  PasswordInfo,
  Strong,
  NoMaskInput,
  BlackTitle,
  SmallText,
  Error
} from './styles';
import {useNavigation} from '@react-navigation/native';
import SuccessNoButton from '../../components/success-no-button';
import { useState } from 'react';
import ErrorModal from '../../components/fail';
import { changeAppPassword } from '../../api/UserApi';

const PasswordAlt = () => {
  const navigation = useNavigation();
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [errorMessage, setErrorMessage] = useState('')

  const disabled = !password || !newPassword || !confirmNewPassword

  const passMatch:boolean = (newPassword == confirmNewPassword) 

  const changePassword = async () => {
    try {
      if(passMatch){
          const res: any = await changeAppPassword({
          password:password,
          newPassword:newPassword,
          confirm:confirmNewPassword
        })
        console.log(res.status)
        if(res.status == 200){
          setSuccess(true)
        } else {
          setModalIsVisible(true)
          setErrorMessage(res.response.data.errors[0].message)
        }
      }
    } catch (e: unknown) {
      console.log(e)
    }
  }

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
        <Title>Alteração de Senha</Title>
        <AuxView />
      </Header>
      <Content>
        <WhiteBoard>
          <ScrollView>
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
                  Digite sua <Strong>senha atual</Strong>
                </Label>
                <NoMaskInput 
                  keyboardType="default" 
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
              </InputLabel>
              <InputLabel>
                <Label>
                  Digite sua <Strong>nova senha</Strong>
                </Label>
                <NoMaskInput 
                  keyboardType="default"
                  secureTextEntry={true}
                  value={newPassword}
                  onChangeText={setNewPassword} 
                />
              </InputLabel>
              <InputLabel>
                <Label>
                  Confirme sua <Strong>nova senha</Strong>
                </Label>
                <NoMaskInput 
                  keyboardType="default"
                  secureTextEntry={true} 
                  value={confirmNewPassword}
                  onChangeText={setConfirmNewPassword}
                />
                {!passMatch && (
                  <Error>
                    <SmallText>
                      os campos de nova senha devem coincidir
                    </SmallText>
                  </Error>
                )}
              </InputLabel>
            </Wrap>
          </ScrollView>
          <ButtonView>
            <Button 
              onPress={changePassword}
              disabled={disabled}
              style={{
                opacity: disabled? 0.4: 1
              }}  
            >
              <TextButton>CONFIRMAR</TextButton>
            </Button>
          </ButtonView>
        </WhiteBoard>
      </Content>
    </Container>
  );
};

export default PasswordAlt;
