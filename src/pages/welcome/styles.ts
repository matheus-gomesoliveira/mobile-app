import styled from "styled-components";
import { Text, TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
    flex: 1;
    padding: 0 36px;
    padding-top: 66px;
    padding-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
`

export const RegularText = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 1px;
`
export const BoldText = styled(Text)`
    color:rgba(29, 28, 62, 1);
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 1px;

`

export const Wrapper = styled(View)`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`

export const TextWrapper = styled(View)`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const Button =  styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(107, 122, 229, 1);
`

export const TextButton = styled(Text)`
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`