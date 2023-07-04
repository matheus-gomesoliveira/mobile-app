import { Image, TouchableOpacity } from 'react-native';
import {Container, WhiteBoard, Content, Header, Title, BigText, Strong, SmallText} from './styles';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExtractAll from '../all';
import ExtractIn from '../In';
import ExtractOut from '../out';

const ExtractScreen = () => {
  const navigation = useNavigation()
  const Tab = createMaterialTopTabNavigator()
    return (
    <Container>
      <Header>
        <Image
          source={require('../../../../assets/wave.png')}
          style={{
            position: 'absolute',
            top: 10,
            left: -36,
            height: 220,
            width: '100%',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <Title>Extrato</Title>
        <TouchableOpacity>
            <Image source={require('../../../../assets/filter.png')} />
        </TouchableOpacity>
      </Header>
      <WhiteBoard>
          
          
          <Tab.Navigator
            initialRouteName='Tudo'
            style={{
                borderTopRightRadius:32,
                borderTopLeftRadius:32,
                marginTop:20
            }}
          >
            <Tab.Screen
                name='Tudo'
                component={ExtractAll}
            />
            <Tab.Screen
                name='Entrada'
                component={ExtractIn}
            />
            <Tab.Screen
                name='Saida'
                component={ExtractOut}
            />
          </Tab.Navigator>
        
        
      </WhiteBoard>
    </Container>
  );
};

export default ExtractScreen;
