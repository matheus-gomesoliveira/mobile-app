import { Image, TouchableOpacity } from 'react-native';
import {Container, WhiteBoard, Content, Header, Title, AuxView, Icon, Button, BigText, Strong, SmallText, Option, Options, User, Wrap} from './styles';
import { useNavigation } from '@react-navigation/native';
import PasswordAlt from '../password-alt';

const Profile = () => {
  const navigation = useNavigation()
  const inits = 'JS'
  const name = 'João de Souza'
  const cpf = '123.456.789-10'
  const account = '0001'
  
  
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
