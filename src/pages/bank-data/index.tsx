import { Image, ScrollView, TouchableOpacity } from 'react-native';
import {Container, WhiteBoard, Content, Header, Title, AuxView, Info, TitleInfo, MediumText, CopyIcon, SmallText, Button, ButtonView, BigText, Strong, ButtonText} from './styles';
import { useNavigation } from '@react-navigation/native';

const BankData = () => {
  const navigation = useNavigation()  
  const agency = '0010'
  const account = '12345-0'
  const cpf = '123.456.789-10'
  const name = 'João de Souza'
  const bank = 'RubBank'
  const accountType = 'Conta Corrente'

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
            <Title>Dados Bancários</Title>
            <AuxView />
          </Header>
          <Content>
            <WhiteBoard>
              <ScrollView
                style={{
                  width:'100%',
                }}
              >
                <Info>
                  <TitleInfo>
                    <MediumText>Agência</MediumText>
                    <MediumText>{agency}</MediumText>
                  </TitleInfo>
                  <CopyIcon>
                    <Image
                      source={require('../../../assets/copy.png')}
                    />
                    <SmallText>Copiar</SmallText>
                  </CopyIcon>
                </Info>
                <Info>
                  <TitleInfo>
                    <MediumText>Conta</MediumText>
                    <MediumText>{account}</MediumText>
                  </TitleInfo>
                  <CopyIcon>
                    <Image
                      source={require('../../../assets/copy.png')}
                    />
                    <SmallText>Copiar</SmallText>
                  </CopyIcon>
                </Info>
                <Info>
                  <TitleInfo>
                    <MediumText>CPF</MediumText>
                    <MediumText>{cpf}</MediumText>
                  </TitleInfo>
                  <CopyIcon>
                    <Image
                      source={require('../../../assets/copy.png')}
                    />
                    <SmallText>Copiar</SmallText>
                  </CopyIcon>
                </Info>
                <Info>
                  <TitleInfo>
                    <MediumText>Favorecido</MediumText>
                    <MediumText>{name}</MediumText>
                  </TitleInfo>
                  <CopyIcon>
                    <Image
                      source={require('../../../assets/copy.png')}
                    />
                    <SmallText>Copiar</SmallText>
                  </CopyIcon>
                </Info>
                <Info>
                  <TitleInfo>
                    <MediumText>Instituição</MediumText>
                    <MediumText>{bank}</MediumText>
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