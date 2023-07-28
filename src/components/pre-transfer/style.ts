import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components";

export const Container = styled(ScrollView)`
    box-sizing: border-box;
    padding: 40px 36px;
`

export const Content = styled(View)`
    padding-bottom: 60px;
`

export const SmallText = styled(Text)`
    font-size: 12px;
    font-weight: 400;
    padding: 0 0 8px;
    color: rgba(0,0,0,1);
`

export const BigText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    padding: 0 0 24px;
    color: rgba(0,0,0,1);
`

export const DescInput = styled(TextInput)`
    height: 80px;
    margin-bottom: 40px;
    border-bottom-width: 1px;
`

export const AmountInput = styled(TextInputMask)`
    height: 80px;
    border-bottom-width: 1px;
    font-size: 28px;
`

export const ButtonView = styled(View)`
    box-sizing: border-box;
    margin-bottom: 40px;
    padding: 20px 0;
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
export const ErrorText = styled(Text)`
    font-size: 12px;
    font-weight: 400;
    color: #f70d1a;
`

export const Error = styled(View)`
    justify-content: center;
    box-sizing: border-box;
    padding: 1px;
`