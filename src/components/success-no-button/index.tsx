import {Image, Modal, View} from 'react-native';
import {Container, Title} from './styles';
import {ReactNode, SetStateAction, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

interface props {
  title: string | null;
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

const SuccessNoButton: React.FC<props> = props => {
  const navigation = useNavigation();

  if (!props.isVisible) {
    return null;
  }
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Profile');
    }, 2000);
  });

  return (
    <Modal>
      <Container>
          <Image
            source={require('../../../assets/success.png')}
            style={{
              height: 80,
              width: 80,
            }}
          />
          <Title>{props.title}</Title>
      </Container>
    </Modal>
  );
};

export default SuccessNoButton;
