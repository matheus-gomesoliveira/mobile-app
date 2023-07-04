import {Text, View} from 'react-native-animatable';
import {Transfer, getExtract} from '../../../api/AccountApi';
import {useEffect, useState} from 'react';
import {Extract} from '../../../api/AccountApi';
import {AxiosResponse} from 'axios';
import {FlatList} from 'react-native';
const ExtractAll = () => {
  const [transfers, setTransfers] = useState<Transfer[]>([]);

  const Extract = async () => {
    try {
      const res = await getExtract();
      if (res) {
        setTransfers(res?.transferencias);
        console.log('Response:' + res.transferencias);
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  useEffect(() => {
    Extract();
  }, []);

  return (
    <View>
      <FlatList
        data={transfers}
        keyExtractor={item => item.id_transferencia.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ExtractAll;
