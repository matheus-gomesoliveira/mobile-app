import { SetStateAction, useContext, useState } from "react";
import { Text, View } from "react-native-animatable"
import { AmountInput, BigText, Button, ButtonTitle, ButtonView, Container, Content, DescInput, SmallText } from "./style";
import { Transfer, TransferContext } from "../../context/TransferContext";
import PassConfirm from "../transaction-password-confirm";

interface ModalProps {
    originName?:string
    originCpf?:string
    destinyName:string
    destinyAccount:string
    isVisible: boolean;
    setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  }

const PreTransfer = (props:ModalProps)=>{
    
    const{setTransfer}= useContext(TransferContext)

    const[desc, setDesc] = useState('')
    const[amount, setAmount] = useState('')

    const[passScreen, setPassScreen] = useState(false)

    const handleConfirm = async () => {
        const transferData: Transfer = {
            destino: props.destinyAccount,
            valor: parseFloat(amount),
            senha_transacional: '',
            descricao: desc || undefined,
          };
          setTransfer(transferData);
          setPassScreen(true)
    }


    return(
        passScreen
        ? <PassConfirm/>
        : (<Container>
                <Content>
                <SmallText>Enviado de</SmallText>
                <BigText>{props.originName}</BigText>
                <SmallText>CPF</SmallText>
                <BigText>{props.originCpf}</BigText>
                <SmallText>Nome</SmallText>
                <BigText>{props.destinyName}</BigText>
                <SmallText>Banco</SmallText>
                <BigText>RubBank</BigText>
                <SmallText>Agência</SmallText>
                <BigText>0001</BigText>
                <SmallText>Conta</SmallText>
                <BigText>{props.destinyAccount}</BigText>
                <SmallText>Descrição</SmallText>
                <DescInput
                    value={desc}
                    onChangeText={setDesc}
                />
                <SmallText>Valor do pagamento</SmallText>                                                
                <AmountInput
                    placeholder="0.00"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType='numeric'
                    />
                <ButtonView>
                    <Button
                        disabled={!amount}
                        style={{
                            opacity: !amount? 0.4 : 1
                        }}
                        onPress={handleConfirm}
                    >
                        <ButtonTitle>CONTINUAR</ButtonTitle>
                    </Button>
                </ButtonView>
            </Content>
        </Container>)
    )
}

export default PreTransfer