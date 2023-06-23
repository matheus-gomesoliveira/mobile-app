import { ScrollView } from "react-native"
import { BarStatus, Button, ButtonView, Container, Header, Input, InputLabel, Label, NoMaskInput, StatusBar, TextButton, Title } from "../global-styles"
import { useState } from "react";
import {useNavigation} from '@react-navigation/native';

const UserScreen = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [birth, setBirth] = useState('');
    
    const navigation = useNavigation()

    return(
        
        <Container>
            <Header>
                <StatusBar>
                    <BarStatus />
                </StatusBar>
                <Title>Preencha abaixo com seus dados pessoais</Title>
            </Header>
            <ScrollView>
                <InputLabel>
                        <Label>Nome Completo*</Label>
                        <NoMaskInput
                            placeholder="Insira seu nome"
                            placeholderTextColor="rgba(170, 171, 171, 1)"
                            keyboardType="default"
                            onChangeText={setName}
                            value={name}
                        />
                </InputLabel>

                <InputLabel>
                        <Label>E-mail*</Label>
                        <NoMaskInput
                            placeholder="exemplo@email.com"
                            placeholderTextColor="rgba(170, 171, 171, 1)"
                            keyboardType="default"
                            onChangeText={setEmail}
                            value={email}
                        />
                </InputLabel>
                
                <InputLabel>
                    <Label>Telefone*</Label>
                    <Input
                        placeholder="(99)99999-9999"
                        placeholderTextColor="rgba(170, 171, 171, 1)"
                        keyboardType="numeric"
                        type={'cel-phone'}
                        onChangeText={text => setPhone(text)}
                        value={phone}
                        />
                </InputLabel>

                <InputLabel>
                    <Label>CPF*</Label>
                    <Input
                        placeholder="123.456.789-10"
                        placeholderTextColor="rgba(170, 171, 171, 1)"
                        keyboardType="numeric"
                        type={'cpf'}
                        onChangeText={text => setCpf(text)}
                        value={cpf}
                        />
                </InputLabel>

                <InputLabel>
                    <Label>Data de Nascimento</Label>
                    <Input
                        placeholder="DD/MM/AAAA"
                        placeholderTextColor="rgba(170, 171, 171, 1)"
                        keyboardType="numeric"
                        type={'datetime'}
                        onChangeText={text => setBirth(text)}
                        value={birth}
                        />
                </InputLabel>
            </ScrollView>
            <ButtonView>
                <Button onPress={()=>navigation.navigate('OnboardingCep')}>
                    <TextButton>CONFIRMAR</TextButton>
                </Button>
            </ButtonView>
        </Container>
        )
}

export default UserScreen