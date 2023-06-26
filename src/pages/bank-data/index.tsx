import { Image, TouchableOpacity } from 'react-native';
import {Container, WhiteBoard, Content, Header, Title, AuxView} from './styles';
import { useNavigation } from '@react-navigation/native';

const BankData = () => {
  const navigation = useNavigation()  
  
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
            </WhiteBoard>
          </Content>
        </Container>
      );
};

export default BankData;