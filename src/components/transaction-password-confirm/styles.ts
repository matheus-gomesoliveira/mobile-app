import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    padding: 40px 36px;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled(TextInput)`
    width: 60px;
    border-bottom-width: 1px;
    text-align: center;
    font-size: 24px;
`

export const InputRow = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonView = styled(View)`
    box-sizing: border-box;
    padding: 20px 0;
    width: 100%;
`

export const Button =  styled(TouchableOpacity)`
    align-self: center ;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(29, 28, 62, 1);
`

export const ButtonTitle = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
`

export const Wrap = styled(View)`
    align-items: center;
`