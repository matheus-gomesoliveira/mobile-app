import React, {Children, ReactNode, SetStateAction, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {
  Button,
  Container,
  ModalBox,
  ModalContent,
  Subtitle,
  TextButton,
  Title,
} from './styles';

interface ModalProps {
  ModalTitle: string | null;
  ModalSubtitle: string | null;
  isVisible: boolean;
  children?: ReactNode;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

const ErrorModal: React.FC<ModalProps> = props => {
  const handleCloseModal = () => {
    props.setIsVisible(false);
  };

  if (!props.isVisible) {
    return null;
  }

  return (
    <Modal transparent visible={true}>
      <Container>
        <ModalContent>
          <Button onPress={handleCloseModal}>
            <TextButton>X Fechar</TextButton>
          </Button>

          <ModalBox>
            <Image
              source={require('../../../assets/error.png')}
              style={{
                height: 52,
                width: 52,
              }}
            />

            <Title>{props.ModalTitle}</Title>
            <Subtitle
              style={{
                textAlign: 'center',
              }}>
              {props.ModalSubtitle}
            </Subtitle>
            {props.children}
          </ModalBox>
        </ModalContent>
      </Container>
    </Modal>
  );
};

export default ErrorModal;
