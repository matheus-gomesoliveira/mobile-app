import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components";


export const Container = styled(View)`
    flex: 1;
    background-color: #1D1C3E;
`

export const Header = styled(View)`
    flex: 1;
    box-sizing: border-box;
    padding: 2% 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


export const AuxView = styled(View)`
    height: 24px;
    width: 24px;
`

export const Content = styled(View)`
    flex: 10;
`
export const WhiteBoard = styled(View)`
    justify-content: space-between;
    box-sizing: border-box;
    flex-direction: column;
    padding: 40px 24px 40px 24px;
    background-color: #FFFFFF;
    height: 100%;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
`

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: 400;
    color:rgba(255,255,255,1);
`

export const BlackTitle = styled(Text)`
    font-size: 24px;
    font-weight: 400;
    color:rgba(0,0,0,1);
    padding-bottom: 20px;
    text-align: center;
`

export const BigText = styled(Text)`
    width:50%;
    font-size: 16px;
    font-weight: 400;
    color:rgba(0,0,0,1);
    padding-bottom: 20px;
    text-align: center;
`

export const NoMaskInput = styled(TextInput)`
    width: 100%;
    border-bottom-width:1px ;
`
export const Label = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: normal;
    font-size: 12px;
`
export const ButtonView = styled(View)`
    box-sizing: border-box;
    padding-top: 20px;
`

export const Button =  styled(TouchableOpacity)`
    align-self:center;
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
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`


export const TextButton = styled(Text)`
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`
export const InputLabel = styled(View)`
    padding-top: 20px;
`
export const Wrap = styled(View)`

`

export const InfoText = styled(Text)`
    color: rgba(170, 171, 171, 1);
    font-weight: 400;
    font-size: 12px;
    width: 80%;
`

export const PasswordInfoText = styled(Text)`
    color:rgba(0, 32, 74, 1);
    font-weight: bold;
    font-size: 12px;
`

export const Strong = styled(Text)`
    font-weight: 700;
`

export const Info = styled(View)`
    padding-top: 40px;
    flex-direction: row;
    align-self: flex-start;
    gap:10px;
    align-items:center;
`

export const PasswordInfo = styled(View)`
    padding-bottom: 20px;
    flex-direction: row;
    gap:10px;
    align-items:center;
    align-self: center;
`