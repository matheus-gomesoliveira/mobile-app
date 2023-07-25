import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import {ExtractContext} from '../../../context/ExtractContext';
import DatePicker from 'react-native-date-picker';

const FilterScreen = () => {
  const navigation = useNavigation();

  const [is15, setis15] = useState(false);
  const [is30, setis30] = useState(false);
  const [is60, setis60] = useState(false);
  const [is90, setis90] = useState(false);

  const [isDate, setIsDate] = useState(false);

  const [isOlder, setIsOlder] = useState(false);
  const [isNewer, setIsNewer] = useState(true);
  const [startDatePicker, setStartDatePicker] = useState(false);
  const [endDatePicker, setEndDatePicker] = useState(false);

  const {params, setParams} = useContext(ExtractContext);

  const [startDate, setStartDate] = useState(params?.start_date? params.start_date : '');
  const [endDate, setEndDate] = useState(params?.end_date? params.end_date : '');
  const [order, setOrder] = useState('');

  const fifteenInMilisseconds:number= 1296000000
  const thirtyInMilisseconds:number= 2592000000
  const sixtyInMilisseconds:number= 5184000000
  const ninetyInMilisseconds:number= 7776000000

  const today = new Date();
  const timezone = today.getTimezoneOffset() * 60000;
  const todayConverted = new Date(today.getTime() - timezone);

  const formatDate = (date: any) => {
    const timezone = date.getTimezoneOffset() * 60000;
    const dateConverted = new Date(date.getTime() - timezone);
    const dateWTZ = dateConverted.toISOString().slice(0, 10);
    const split = dateWTZ.split('-');
    const dateFormated = `${split[2]}/${split[1]}/${split[0]}`;

    return dateFormated;
  };


  const handleOlder = async () => {
    setIsOlder(true);
    setIsNewer(false);
    setOrder('asc');
  };

  const handleNewer = async () => {
    setIsNewer(true);
    setIsOlder(false);
    setOrder('desc');
  };

  const handleConfirm = async () => {
    setParams(prevParams => ({
      ...prevParams,
      order: order,
      start_date: startDate,
      end_date: endDate,
    }));
    navigation.goBack();
  };

  const handleDate = () => {
    setIsDate(!isDate);
  };

  const handle15 = () => {
    setis15(true);
    setis30(false);
    setis60(false);
    setis90(false);
    const newDate = new Date(todayConverted.getTime() - fifteenInMilisseconds)
    const formattedNewDate = formatDate(newDate)
    setStartDate(formattedNewDate)
  };

  const handle30 = () => {
    setis15(false);
    setis30(true);
    setis60(false);
    setis90(false);
    const newDate = new Date(todayConverted.getTime() - thirtyInMilisseconds)
    const formattedNewDate = formatDate(newDate)
    setStartDate(formattedNewDate)
  };

  const handle60 = () => {
    setis15(false);
    setis30(false);
    setis60(true);
    setis90(false);
    const newDate = new Date(todayConverted.getTime() - sixtyInMilisseconds)
    const formattedNewDate = formatDate(newDate)
    setStartDate(formattedNewDate)
  };

  const handle90 = () => {
    setis15(false);
    setis30(false);
    setis60(false);
    setis90(true);
    const newDate = new Date(todayConverted.getTime() - ninetyInMilisseconds)
    const formattedNewDate = formatDate(newDate)
    setStartDate(formattedNewDate)
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
                    color: is15
                      ? 'rgba(255,255, 255, 1)'
                      : 'rgba(56, 56, 56, 1)',
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
                    color: is30
                      ? 'rgba(255,255, 255, 1)'
                      : 'rgba(56, 56, 56, 1)',
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
                    color: is60
                      ? 'rgba(255,255, 255, 1)'
                      : 'rgba(56, 56, 56, 1)',
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
                    color: is90
                      ? 'rgba(255,255, 255, 1)'
                      : 'rgba(56, 56, 56, 1)',
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
            <DatePicker
              mode={'date'}
              date={new Date()}
              modal
              open={startDatePicker}
              onCancel={() => {
                setStartDatePicker(false);
              }}
              onConfirm={date => {
                setStartDatePicker(false),
                  setStartDate(formatDate(date)),
                  console.log('startDate:', formatDate(date));
              }}
              locale="pt_BR"
              title={'Selecione a data'}
              minimumDate={new Date('2023-01-02')}
              maximumDate={todayConverted}
              confirmText="Confirmar"
              cancelText="Cancelar"
            />
            <DatePicker
              mode={'date'}
              date={new Date()}
              modal
              open={endDatePicker}
              onCancel={() => {
                setEndDatePicker(false);
              }}
              onConfirm={date => {
                setEndDatePicker(false),
                  setEndDate(formatDate(date)),
                  console.log('endDate:', formatDate(date));
              }}
              locale="pt_BR"
              title={'Selecione a data'}
              minimumDate={new Date('2023-01-02')}
              maximumDate={todayConverted}
              confirmText="Confirmar"
              cancelText="Cancelar"
            />
            {isDate && (
              <SameLineInputs>
                <InputLabel>
                  <Label>Data inicial</Label>
                  <TouchableOpacity onPress={() => setStartDatePicker(true)}>
                    <Input
                      placeholderTextColor="rgba(0, 0, 0, 1)"
                      type={'datetime'}
                      maxLength={10}
                      value={startDate}
                      focusable={false}
                      editable={false}
                    />
                  </TouchableOpacity>
                </InputLabel>
                <InputLabel>
                  <Label>Data final</Label>
                  <TouchableOpacity onPress={() => setEndDatePicker(true)}>
                    <Input
                      placeholderTextColor="rgba(0, 0, 0, 1)"
                      type={'datetime'}
                      editable={false}
                      maxLength={10}
                      value={endDate}
                      focusable={false}
                      onFocus={() => setEndDatePicker(true)}
                    />
                  </TouchableOpacity>
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
                  {isOlder && <Ball />}
                </Select>
              </FilterOrder>
            </OrderType>
            <OrderType>
              <FilterOrder>
                <Title>Mais recentes</Title>
                <Select onPress={handleNewer} isSelect={isNewer}>
                  {isNewer && <Ball />}
                </Select>
              </FilterOrder>
            </OrderType>
          </Order>
        </Filters>
        <BottomSection>
          <Button onPress={handleConfirm}>
            <ButtonTitle>CONTINUAR</ButtonTitle>
          </Button>
          <Transparent>
            <Title>
              <Strong>
                <Orange>Limpar Filtros</Orange>
              </Strong>
            </Title>
          </Transparent>
        </BottomSection>
      </WhiteBoard>
    </Container>
  );
};

export default FilterScreen;
