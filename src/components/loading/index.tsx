import {ActivityIndicator, Modal} from 'react-native';
import {View} from 'react-native-animatable';

export const Loading = () => {
  return (
    <Modal>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.64)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator
            size={'large'}
            color={'#1D1C3E'}
        />
      </View>
    </Modal>
  );
};

export default Loading;
