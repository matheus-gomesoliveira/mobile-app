import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    z-index: 10;
    flex: 1;
    background-color:#FFFFFF;
    box-sizing: border-box;
    padding: 15% 36px 8% ;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled(Text)`
    font-size: 16px;
    font-weight: 700;
    color: rgba(56, 56, 56, 1);
    align-self: center;
`

export const Subtitle = styled(Text)`
    font-size: 14px;
    font-weight: normal;
    color: rgba(56, 56, 56, 1);

`

export const SmallText = styled(Text)`
    font-size: 12px;
    font-weight: normal;
    width: 77%;
    color: rgba(56, 56, 56, 1);
`

export const TextBox = styled(View)`
    height: 40%;
    justify-content: space-between;
`

export const Topic = styled(View)`
    flex-direction: row;
    align-items: center;
    gap:10px;
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
    width: 288px;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(29, 28, 62, 1);
`
export const TextButton = styled(Text)`
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`

export const CloseSection = styled(View)`
    
`