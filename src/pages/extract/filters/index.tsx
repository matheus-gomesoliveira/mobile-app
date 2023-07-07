import {Image, TouchableOpacity, View} from 'react-native';
import {
  Container,
  WhiteBoard,
  Content,
  Header,
  Title,
  BigText,
  Strong,
  SmallText,
  MediumText,
  TextWrapper,
  FilterButton,
  FilterRow,
  Orange,
  Others,
  DateSection,
  InputLabel,
  Label,
  Input,
  SameLineInputs,
  Order,
  OrderType,
  FilterOrder,
  Select,
  Ball,
  Button,
  ButtonTitle,
  Transparent,
  BottomSection,
  Filters,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useContext, useState} from 'react';
import { ExtractContext } from '../../../context/ExtractContext';

const FilterScreen = () => {
  const navigation = useNavigation();

  const [is15, setis15] = useState(false);
  const [is30, setis30] = useState(false);
  const [is60, setis60] = useState(false);
  const [is90, setis90] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [isDate, setIsDate] = useState(false);

  const [isOlder, setIsOlder] = useState(false);
  const [isNewer, setIsNewer] = useState(false);

  const{params, setParams} = useContext(ExtractContext) 


  const handleOlder = () => {
    setIsOlder(!isOlder);
    setIsNewer(false);
    if(isOlder){
      setParams((prevParams) => ({
          ...prevParams,
          order:'asc'
      }))
    }
  };

  const handleNewer = () => {
    setIsNewer(!isNewer);
    setIsOlder(false);
    if(isNewer){
      setParams((prevParams) => ({
          ...prevParams,
          order:'desc'
      }))
    }
  };

  const handleDate = () => {
    setIsDate(!isDate);
  };

  const handle15 = () => {
    setis15(true);
    setis30(false);
    setis60(false);
    setis90(false);
  };

  const handle30 = () => {
    setis15(false);
    setis30(true);
    setis60(false);
    setis90(false);
  };

  const handle60 = () => {
    setis15(false);
    setis30(false);
    setis60(true);
    setis90(false);
  };

  const handle90 = () => {
    setis15(false);
    setis30(false);
    setis60(false);
    setis90(true);
  };

  return (
    <Container>
      <WhiteBoard>
        <Filters>
          <Header>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../../../assets/close.png')} />
            </TouchableOpacity>
            <Strong>
              <Title>Filtro</Title>
            </Strong>
            <View />
          </Header>
          <TextWrapper>
            <Strong>
              <Title>Período</Title>
            </Strong>
            <Title>Período máximo de 90 dias a partir da data inicial</Title>
          </TextWrapper>
          <FilterRow>
            <FilterButton
              onPress={handle15}
              style={{
                backgroundColor: is15
                  ? 'rgba(241, 88, 12, 1)'
                  : 'rgba(255,255, 255, 1)',
              }}>
              <Strong
                style={{
                  textAlign: 'center',
                }}>
                <Title
                  style={{
                    color: is15 ? 'rgba(255,255, 255, 1)' : 'rgba(56, 56, 56, 1)',
                  }}>
                  15 dias
                </Title>
              </Strong>
            </FilterButton>
            <FilterButton
              onPress={handle30}
              style={{
                backgroundColor: is30
                  ? 'rgba(241, 88, 12, 1)'
                  : 'rgba(255,255, 255, 1)',
              }}>
              <Strong
                style={{
                  textAlign: 'center',
                }}>
                <Title
                  style={{
                    color: is30 ? 'rgba(255,255, 255, 1)' : 'rgba(56, 56, 56, 1)',
                  }}>
                  30 dias
                </Title>
              </Strong>
            </FilterButton>
            <FilterButton
              onPress={handle60}
              style={{
                backgroundColor: is60
                  ? 'rgba(241, 88, 12, 1)'
                  : 'rgba(255,255, 255, 1)',
              }}>
              <Strong
                style={{
                  textAlign: 'center',
                }}>
                <Title
                  style={{
                    color: is60 ? 'rgba(255,255, 255, 1)' : 'rgba(56, 56, 56, 1)',
                  }}>
                  60 dias
                </Title>
              </Strong>
            </FilterButton>
            <FilterButton
              onPress={handle90}
              style={{
                backgroundColor: is90
                  ? 'rgba(241, 88, 12, 1)'
                  : 'rgba(255,255, 255, 1)',
              }}>
              <Strong
                style={{
                  textAlign: 'center',
                }}>
                <Title
                  style={{
                    color: is90 ? 'rgba(255,255, 255, 1)' : 'rgba(56, 56, 56, 1)',
                  }}>
                  90 dias
                </Title>
              </Strong>
            </FilterButton>
          </FilterRow>
          <DateSection>
            <Others>
              <Orange>
                <Strong>
                  <MediumText>Outros períodos</MediumText>
                </Strong>
              </Orange>
              <TouchableOpacity onPress={handleDate}>
                {isDate ? (
                  <Image
                    source={require('../../../../assets/close_dropdown.png')}
                  />
                ) : (
                  <Image
                    source={require('../../../../assets/open_dropdown.png')}
                  />
                )}
              </TouchableOpacity>
            </Others>
            {isDate && (
              <SameLineInputs>
                <InputLabel>
                  <Label>Data inicial</Label>
                  <Input
                    placeholderTextColor="rgba(170, 171, 171, 1)"
                    keyboardType="numeric"
                    type={'datetime'}
                    maxLength={10}
                    value={startDate}
                    onChangeText={setStartDate}
                  />
                </InputLabel>
                <InputLabel>
                  <Label>Data final</Label>
                  <Input
                    placeholderTextColor="rgba(170, 171, 171, 1)"
                    keyboardType="numeric"
                    type={'datetime'}
                    maxLength={10}
                    value={endDate}
                    onChangeText={setEndDate}
                  />
                </InputLabel>
              </SameLineInputs>
            )}
          </DateSection>
          <Order>
            <Title>
              <Strong>Por ordem</Strong>
            </Title>
            <OrderType>
              <FilterOrder>
                <Title>Mais antigas</Title>
                <Select onPress={handleOlder} isSelect={isOlder}>
                  {isOlder &&(<Ball />)}
                </Select>
              </FilterOrder>
            </OrderType>
            <OrderType>
              <FilterOrder>
                <Title>Mais recentes</Title>
                <Select onPress={handleNewer} isSelect={isNewer}>
                  {isNewer &&(<Ball />)}
                </Select>
              </FilterOrder>
            </OrderType>
          </Order>
        </Filters>
        <BottomSection>
          <Button onPress={()=>{navigation.goBack()}}>
            <ButtonTitle>
              CONTINUAR
            </ButtonTitle>
          </Button>
          <Transparent>
            <Title><Strong><Orange>Limpar Filtros</Orange></Strong></Title>
          </Transparent>
        </BottomSection>
      </WhiteBoard>
    </Container>
  );
};

export default FilterScreen;
