import React, { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { Button, Container, ModalBox, ModalContent, Subtitle, TextButton, Title } from "./styles";

const ErrorModal = (TitleProps: string | undefined, Sub: string | undefined)=>{

    TitleProps = "Titulo do Erro";
    Sub = "Mensagem do erro";

    const [isVisible, setIsVisible] = useState(true);

    const handleCloseModal = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null; // Return null when isVisible state is false to hide the modal
    }

    return(
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

                    <Title>{TitleProps}</Title>
                    <Subtitle>{Sub}</Subtitle>
                </ModalBox>
            </ModalContent>
    
        </Container>
    )

}

export default ErrorModal