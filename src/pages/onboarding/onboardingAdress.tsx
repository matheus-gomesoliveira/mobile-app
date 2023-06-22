import { ScrollView } from "react-native"
import { BarStatus, Button, ButtonView, Container, Input, InputLabel, Label, StatusBar, TextButton, Title } from "./styles"

const AddresForm = ()=>{
    return(
        <Container>
            <StatusBar>
                <BarStatus />
            </StatusBar>
            <Title>Preencha abaixo com seus dados pessoais</Title>
            <ScrollView>
                <InputLabel>
                        <Label>Nome Completo*</Label>
                        <Input
                            placeholder="Insira seu nome"
                            placeholderTextColor="rgba(170, 171, 171, 1)"
                            keyboardType="default"
                        />
                </InputLabel>

                <InputLabel>
                        <Label>E-mail*</Label>
                        <Input
                            placeholder="exemplo@email.com"
                            placeholderTextColor="rgba(170, 171, 171, 1)"
                            keyboardType="default"
                        />
                </InputLabel>
                
                <InputLabel>
                    <Label>Telefone*</Label>
                    <Input
                        placeholder="(99)99999-9999"
                        placeholderTextColor="rgba(170, 171, 171, 1)"
                        keyboardType="numeric"
                    />
                </InputLabel>

                <InputLabel>
                    <Label>CPF*</Label>
                    <Input
                        placeholder="123.456.789-10"
                        placeholderTextColor="rgba(170, 171, 171, 1)"
                        keyboardType="numeric"
                    />
                </InputLabel>

                <InputLabel>
                    <Label>Data de Nascimento</Label>
                    <Input
                        placeholder="DD-MM-AAAA"
                        placeholderTextColor="rgba(170, 171, 171, 1)"
                        keyboardType="numeric"
                    />
                </InputLabel>
            </ScrollView>
            <ButtonView>
                <Button>
                    <TextButton>CONFIRMAR</TextButton>
                </Button>
            </ButtonView>
        </Container>
        )
}

export default AddresForm