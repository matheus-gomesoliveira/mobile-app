import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-animatable";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    background-color:#FFFFFF;
    box-sizing: border-box;
    padding: 15% 36px 8% 36px;
`
export const StatusBar = styled(View)`
    flex-direction: row;
    height: 5px;
    background-color: rgba(210, 210, 210, 1);
    border-radius: 50px;
`

export const BarStatus = styled(View)`
    width: 20%;
    height: 100%;
    background-color:rgba(107, 122, 229, 1);
    border-radius: 50px;
`
export const Title = styled(Text)`
    font-size: 24px;
    color:rgba(56, 56, 56, 1);
    text-align: center;
`

export const Input = styled(TextInput)`
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
    align-self: center;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(29, 28, 62, 1);
`
export const TextButton = styled(Text)`
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`
//WRAPERS//

export const Header = styled(View)`

`

export const InputLabel = styled(View)`
    padding-top: 20px;
`


