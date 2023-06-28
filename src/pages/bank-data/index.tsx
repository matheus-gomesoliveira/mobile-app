import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  WhiteBoard,
  Content,
  Header,
  Title,
  AuxView,
  Info,
  TitleInfo,
  MediumText,
  CopyIcon,
  SmallText,
  Button,
  ButtonView,
  BigText,
  Strong,
  ButtonText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {BlackTitle} from '../password-alt/styles';
import { useContext } from 'react';
import { UserContext } from '../../context/AppContext';

const BankData = () => {
  const { userData, setUserData} = useContext(UserContext)
  const accountType = 'Conta Corrente';
  const navigation = useNavigation()

  return (
    <Container>
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
        <Title>Dados Bancários</Title>
        <AuxView />
      </Header>
      <Content>
        <WhiteBoard>
          <ScrollView
            style={{
              width: '100%',
            }}>
            <BigText>
              Use os dados abaixo para fazer uma
              <Strong>TED ou DOC para sua Conta RubBank.</Strong>
            </BigText>
            <Info>
              <TitleInfo>
                <MediumText>Agência</MediumText>
                <MediumText>{userData.conta?.agencia}</MediumText>
              </TitleInfo>
              <CopyIcon>
                <Image source={require('../../../assets/copy.png')} />
                <SmallText>Copiar</SmallText>
              </CopyIcon>
            </Info>
            <Info>
              <TitleInfo>
                <MediumText>Conta</MediumText>
                <MediumText>{userData.conta?.numero_conta}</MediumText>
              </TitleInfo>
              <CopyIcon>
                <Image source={require('../../../assets/copy.png')} />
                <SmallText>Copiar</SmallText>
              </CopyIcon>
            </Info>
            <Info>
              <TitleInfo>
                <MediumText>CPF</MediumText>
                <MediumText>{userData.usuario?.cpf}</MediumText>
              </TitleInfo>
              <CopyIcon>
                <Image source={require('../../../assets/copy.png')} />
                <SmallText>Copiar</SmallText>
              </CopyIcon>
            </Info>
            <Info>
              <TitleInfo>
                <MediumText>Favorecido</MediumText>
                <MediumText>{userData.usuario?.nome}</MediumText>
              </TitleInfo>
              <CopyIcon>
                <Image source={require('../../../assets/copy.png')} />
                <SmallText>Copiar</SmallText>
              </CopyIcon>
            </Info>
            <Info>
              <TitleInfo>
                <MediumText>Instituição</MediumText>
                <MediumText>{userData.conta?.banco}</MediumText>
              </TitleInfo>
            </Info>
            <Info>
              <TitleInfo>
                <MediumText>Tipo</MediumText>
                <MediumText>{accountType}</MediumText>
              </TitleInfo>
            </Info>
          </ScrollView>
          <ButtonView>
            <Button>
              <ButtonText>COMPARTILHAR DADOS</ButtonText>
            </Button>
          </ButtonView>
        </WhiteBoard>
      </Content>
    </Container>
  );
};

export default BankData;
