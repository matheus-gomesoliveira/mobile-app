import {Text, View} from 'react-native-animatable';
import {
  DataParams,
  Transfer,
  getExtract,
  getTransfer,
} from '../../../api/AccountApi';
import {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Black,
  BoldText,
  Content,
  TextWrap,
  ThinText,
  TransferContainer,
  Wrap,
  Title,
  Piggy,
} from './styles';
import {ExtractContext} from '../../../context/ExtractContext';
import {useNavigation} from '@react-navigation/native';
import Payment from '../../../components/payment';
import Loading from '../../../components/loading';

const ExtractAll = () => {

  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const {params} = useContext(ExtractContext);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [origin_name, setOriginName] = useState('');
  const [origin_cpf, setOriginCpf] = useState('');
  const [origin_account, setOriginAccount] = useState('');

  const [destiny_name, setDestinyName] = useState('');
  const [destiny_cpf, setDestinyCpf] = useState('');
  const [destiny_account, setDestinyAccount] = useState('');

  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  const [loadingPayment, setLoadingPayment] = useState(false);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function formattedValue(valor: string | undefined) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(Number(valor));
  }

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  function dateTitle(data: string): string {
    const splits = data.split('/');
    const day = splits[0];
    const month = months[parseInt(splits[1]) - 1];
    const title = `${day} de ${month}`;
    return title;
  }

  const loadPage = async (pageNumber: number) => {
    try {
      setLoading(true);
      const queryParams: DataParams = {
        page: pageNumber.toString(),
        type: 'TUDO',
        order: params?.order ? params.order : '',
        start_date: params?.start_date ? params?.start_date : '',
        end_date: params?.end_date ? params?.end_date : '',
      };

      const res = await getExtract(queryParams);
      if (res?.transferencias) {
        if (pageNumber === 1) {
          setTransfers(res?.transferencias);
        } else {
          setTransfers(prevTransfers =>
            prevTransfers.concat(res?.transferencias),
          );
        }
        setIsLastPage(res?.paginas?.total === pageNumber);
        setPage(pageNumber);
      }
    } catch (e) {
      console.log('Error:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    loadPage(nextPage);
  };

  useEffect(() => {
    loadPage(1);
  }, [params]);

  const RenderItem = (item: Transfer, index: number) => {
    const transfer_date = item.data_transferencia.dia;
    const prev = index > 0 ? transfers[index - 1] : null;
    const isFirsItem = index === 0;
    const isDifferentDate =
      prev && prev.data_transferencia.dia !== transfer_date;

    const transfer = async () => {
      try {
        setLoadingPayment(true);
        const res = await getTransfer(item.id_transferencia.toString());
        if (res) {
          setOriginName(res.transferencia.nome_origem);
          setOriginCpf(res.transferencia.cpf_origem);
          setOriginAccount(res.transferencia.conta_origem.toString());

          setDestinyName(res.transferencia.nome_destino);
          setDestinyCpf(res.transferencia.cpf_destino);
          setDestinyAccount(res.transferencia.conta_destino.toString());

          setDate(res.transferencia.data_transferencia.dia);
          setTime(res.transferencia.data_transferencia.hora);

          setType(res.transferencia.tipo);
          const value = formattedValue(res.transferencia.valor);

          setAmount(value);

          setModalIsVisible(true);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingPayment(false);
      }
    };

    return (
      <Content>
        {loadingPayment ? (
          <Loading />
        ) : (
          modalIsVisible && (
            <Payment
              origin_name={origin_name}
              origin_cpf={origin_cpf}
              origin_account={origin_account}
              destiny_name={destiny_name}
              destiny_cpf={destiny_cpf}
              destiny_account={destiny_account}
              amount={amount}
              tipo={type}
              date={date}
              time={time}
              isVisivble={modalIsVisible}
              setIsVisible={setModalIsVisible}
            />
          )
        )}
        <Black>
          {isFirsItem || isDifferentDate ? (
            <Title>{dateTitle(item.data_transferencia.dia)}</Title>
          ) : null}
        </Black>
        <TouchableOpacity onPress={transfer}>
          <TransferContainer>
            <Wrap>
              <Image source={require('../../../../assets/transfer_logo.png')} />
              <TextWrap>
                <Black>
                  <BoldText>Transferência entre contas</BoldText>
                </Black>
                <ThinText>{item.status}</ThinText>
                <ThinText>{item.data_transferencia.hora}</ThinText>
              </TextWrap>
            </Wrap>
            <BoldText
              style={{
                color:
                  item.tipo == 'ENTRADA'
                    ? 'rgba(2, 157, 41, 1)'
                    : 'rgba(157, 2, 41, 1)',
              }}>
              RC {formattedValue(item.valor)}
            </BoldText>
          </TransferContainer>
        </TouchableOpacity>
      </Content>
    );
  };

  const Footer = () => {
    return isLastPage ? (
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Você chegou ao fim do extrato!</Text>
      </View>
    ) : (
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {loading ? <ActivityIndicator /> : null}
      </View>
    );
  };

  return (
    <View>
      {transfers != undefined ? (
        <FlatList
          data={transfers}
          keyExtractor={(item, index) =>
            item.id_transferencia?.toString() + '' + index.toString()
          }
          onEndReached={handleLoadMore}
          ListFooterComponent={Footer}
          renderItem={({item, index}) => RenderItem(item, index)}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Content
          style={{
            height: transfers != undefined ? 0 : '100%',
          }}>
          <Piggy>
            <Image source={require('../../../../assets/piggy-bank.png')} />
            <Title>Você ainda não possui lançamentos.</Title>
          </Piggy>
        </Content>
      )}
    </View>
  );
};

export default ExtractAll;
