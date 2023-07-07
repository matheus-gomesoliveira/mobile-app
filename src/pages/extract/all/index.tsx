import {Text, View} from 'react-native-animatable';
import {DataParams, Transfer, getExtract} from '../../../api/AccountApi';
import {useContext, useEffect, useState} from 'react';
import {Extract} from '../../../api/AccountApi';
import {AxiosResponse} from 'axios';
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
const ExtractAll = () => {
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const {params, setParams} = useContext(ExtractContext);
  const [isLastPage, setIsLastPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const Extract = async () => {
    try {
      setLoading(true);
      const queryParams: DataParams = {
        page: page.toString(),
        type: params?.type,
        order: params?.order,
        start_date: params?.start_date,
        end_date: params?.end_date,
      };
      console.log(queryParams.page);
      const res = await getExtract(queryParams);
      if (res) {
        setTransfers(prevTransfers =>
          prevTransfers.concat(res?.transferencias),
        );
        setIsLastPage(res?.paginas?.total == page);
        setPage(page + 1);
      }
    } catch (e) {
      console.log('Error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Extract();
    setPage(1);
  }, []);

  function formattedValue(valor: string | undefined) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(Number(valor));
  }

  const RenderItem = (item: Transfer) => {
    return (
      <Content>
        <TouchableOpacity>
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
    console.log('>>>>>>' + loading);
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

  const handleLoadMore = () => {
    if (!loading && !isLastPage) {
      Extract();
    }
  };

  return (
    <View>
      {transfers.length != 0 ? (
        <FlatList
          data={transfers}
          keyExtractor={(item, index) =>
            item.id_transferencia?.toString() + '' + index.toString()
          }
          onEndReached={handleLoadMore}
          ListFooterComponent={Footer}
          renderItem={({item}) => RenderItem(item)}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Content
          style={{
            height: transfers.length != 0 ? 0 : '100%',
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
