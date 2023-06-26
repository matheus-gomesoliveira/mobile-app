import { Image } from "react-native-animatable"
import { Button, ButtonView, Container, SmallText, Subtitle, TextBox, TextButton, Title, Topic } from "./styles"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";


const PasswordRules= ()=>{

    const navigation = useNavigation()

    return (
        <Container>

            <TextBox>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image
                        source={require('../../../assets/close.png')}
                    />
                </TouchableOpacity>
                <Title> Criar senha</Title>
                <Subtitle>Siga as intruções abaixo para criar uma senha segura:</Subtitle>
                <Topic>
                    <Image
                        source={require('../../../assets/check.png')}
                    />
                    <SmallText>A senha deve conter no mínimo 8 caracteres, entre letras, números e caracteres especiais (!@#$%^&*)</SmallText>
                </Topic>
                <Topic>
                    <Image
                        source={require('../../../assets/check.png')}
                    />
                    <SmallText>Não utilizar números ou letras repetidos; não utilizar números ou letras sequênciais(ex: 12345678, aaaaaaaa)</SmallText>
                </Topic>
                <Topic>
                    <Image
                        source={require('../../../assets/check.png')}
                    />
                    <SmallText>Não é permitido utilizar dados pessoais como nome, data de nascimento, número de telefone ou nome da mãe</SmallText>
                </Topic>
            </TextBox>
            <ButtonView>
                <Button onPress={()=>navigation.goBack()}>
                    <TextButton>ENTENDI</TextButton>
                </Button>
            </ButtonView>
        </Container>
    )
}

export default PasswordRules