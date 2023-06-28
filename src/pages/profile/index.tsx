import { Image, TouchableOpacity } from 'react-native';
import {Container, WhiteBoard, Content, Header, Title, AuxView, Icon, Button, BigText, Strong, SmallText, Option, Options, User, Wrap} from './styles';
import { useNavigation } from '@react-navigation/native';
import PasswordAlt from '../password-alt';
import { UserContext } from '../../context/AppContext';
import { useContext } from 'react';

const Profile = () => {
  const { userData } = useContext(UserContext);
  const {usuario, conta} = userData
  
  const formatedCpf = ()=>{
    const pattern = /^(\w{3})(\w{3})(\w{3})(\w)$/;
    const maskedCpf = usuario?.cpf.replace(pattern, '$1.$2.$3') 
    return maskedCpf
  }

  function getFirstLetter(fullName: string | undefined): string | undefined {
    if(fullName){
      const names = fullName.trim().split(' ');
  
      if (names.length === 0) {
        return '';
      }
    
      const firstName = names[0];
      const lastName = names[names.length - 1];
    
      const firstLetterFirstName = firstName ? firstName.charAt(0) : '';
      const firstLetterLastName = lastName ? lastName.charAt(0) : '';
      return firstLetterFirstName + firstLetterLastName;
    }
  }

  const navigation = useNavigation()
  
  const inits = getFirstLetter(usuario?.nome)
  const name = usuario?.nome
  const cpf = formatedCpf()
  const account = conta?.numero_conta
  
  
    return (
        <Container>
          <Header>
            <Image
              source={require('../../../assets/wave.png')}
              style={{
                position: 'absolute',
                top: 10,
                left:-36,
                height: 220,
                width: '100%',
              }}
            />
            <TouchableOpacity
              onPress={()=>navigation.goBack()}
            >
              <Image
                  source={require('../../../assets/left-arrow.png')}
                />
            </TouchableOpacity>
            <Title>Perfil</Title>
            <AuxView />
          </Header>
          <WhiteBoard>
            <Content>
              <User>
                <Icon>
                  <Title>{inits}</Title>
                </Icon>
                <Wrap>
                  <BigText>{name}</BigText>
                  <SmallText>CPF: {cpf}</SmallText>
                </Wrap>
              </User>
              <BigText>Conta Digital: {account}</BigText>
              <Button onPress={()=>navigation.navigate('BankData')}>
                <BigText>
                  <Strong>DADOS BANCÁRIOS</Strong>
                </BigText>
              </Button>
              <Options>
                <Option onPress={()=>navigation.navigate('PasswordAlt')}>
                  <BigText>Alterar senha do App</BigText>
                  <Image
                    source={require('../../../assets/overview.png')}
                  />
                </Option>
                <Option>
                  <BigText>Alterar senha Transacional</BigText>
                  <Image
                    source={require('../../../assets/overview.png')}
                  />
                </Option>
                <Option onPress={()=>navigation.navigate('AddressAlt')}>
                  <BigText>Alterar Endereço</BigText>
                  <Image
                    source={require('../../../assets/overview.png')}
                  />
                </Option>  
              </Options>
            </Content>
          </WhiteBoard>
        </Container>
      );
};

export default Profile;
