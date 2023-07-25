import {Modal, ScrollView, TouchableOpacity} from 'react-native';
import {
  BoldText,
  Container,
  Destiny,
  Header,
  Line,
  Origin,
  RegularText,
  Title,
} from './styles';
import {Image, Text} from 'react-native-animatable';
import React, {SetStateAction} from 'react';
import { useNavigation } from '@react-navigation/native';

interface Props {
  origin_name: string;
  origin_account: string;
  origin_cpf: string;
  destiny_name: string;
  destiny_account: string;
  destiny_cpf: string;
  amount: string;
  date: string;
  time: string;
  tipo: string;
  isVisivble: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  navigate?: string
}

const Payment = (props: Props) => {
  const navigation = useNavigation()
  return (
    <Modal transparent visible={true}>
      <Container>
        <TouchableOpacity
          onPress={() =>props.navigate? navigation.navigate(`${props.navigate}`) : props.setIsVisible(false)}
          style={{
            position: 'absolute',
            top: 30,
            right: 10,
            height: 30,
            width: 30,
          }}>
          <Image source={require('../../../assets/close.png')} />
        </TouchableOpacity>
        <ScrollView>
          <Header>
            <Title
              style={{
                paddingBottom: 20,
              }}>
              Comprovante de transferência
            </Title>
            <RegularText>
              {props.date} - {props.time}
            </RegularText>
            <Line>
              <BoldText>Valor</BoldText>
              <RegularText>RC {props.amount}</RegularText>
            </Line>
            <Line>
              <BoldText>Tipo</BoldText>
              <RegularText>{props.tipo}</RegularText>
            </Line>
          </Header>
          <Destiny>
            <BoldText
              style={{
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              DESTINO
            </BoldText>
            <Line>
              <BoldText>Nome</BoldText>
              <RegularText>{props.destiny_name}</RegularText>
            </Line>
            <Line>
              <BoldText>Agência</BoldText>
              <RegularText>0001</RegularText>
            </Line>
            <Line>
              <BoldText>Instituição</BoldText>
              <RegularText>RubBank</RegularText>
            </Line>
            <Line>
              <BoldText>Conta</BoldText>
              <RegularText>{props.destiny_account}</RegularText>
            </Line>
            <Line>
              <BoldText>CPF</BoldText>
              <RegularText>{props.destiny_cpf}</RegularText>
            </Line>
          </Destiny>

          <Origin>
            <BoldText
              style={{
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}>
              ORIGEM
            </BoldText>
            <Line>
              <BoldText>Nome</BoldText>
              <RegularText>{props.origin_name}</RegularText>
            </Line>
            <Line>
              <BoldText>Agência</BoldText>
              <RegularText>0001</RegularText>
            </Line>
            <Line>
              <BoldText>Instituição</BoldText>
              <RegularText>RubBank</RegularText>
            </Line>
            <Line>
              <BoldText>Conta</BoldText>
              <RegularText>{props.origin_account}</RegularText>
            </Line>
            <Line>
              <BoldText>CPF</BoldText>
              <RegularText>{props.origin_cpf}</RegularText>
            </Line>
          </Origin>
        </ScrollView>
      </Container>
    </Modal>
  );
};

export default Payment;
