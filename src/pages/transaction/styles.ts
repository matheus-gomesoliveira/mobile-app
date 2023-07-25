import { Text, TouchableOpacity, View } from "react-native";
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

export const WhiteBoard = styled(View)`
    flex: 10;
    background-color: #FFFFFF;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
`

export const Content = styled(View)`
    box-sizing: border-box;
    height: 100%;
    background-color: #FFFFFF;
    padding: 0 36px;
    justify-content: space-between;
`

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: 400;
    color:rgba(255,255,255,1);
`

export const BigText = styled(Text)`
    font-size:16px ;
    font-weight: 400;
    color:rgba(0, 0, 0, 1);
`

export const MediumText = styled(Text)`
    font-size: 14px;
    color:rgba(255,255,255,1);
`
export const BalanceText = styled(Text)`
    font-size: 18px;
    color:rgba(255,255,255,1);
`

export const SmallText = styled(Text)`
    font-size: 10px;
    color:rgba(0, 0, 0, 1);
`

export const Strong = styled(Text)`
    font-weight: 500;
`

export const Balance = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    align-self: center;
    padding-bottom: 25px;
    align-items: center;
`
export const Input = styled(TextInputMask)`
    width: 100%;
    border-bottom-width:1px ;
`

export const Label = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: normal;
    font-size: 12px;
`
export const InputLabel = styled(View)`
    padding-top: 20px;
`

export const ButtonView = styled(View)`
    box-sizing: border-box;
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