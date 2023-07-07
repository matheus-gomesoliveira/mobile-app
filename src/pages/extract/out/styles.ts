import { Text, View } from "react-native";
import styled from "styled-components";

export const Content = styled(View)`
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 36px;
`

export const TransferContainer = styled(View)`
    flex-direction: row;
    height: 74px;
    padding-top: 20px;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled(Text)`
    font-size: 16px;
`   

export const BoldText = styled(Text)`
    font-weight:700 ;
    font-size: 14px;
`

export const ThinText = styled(Text)`
    font-size: 10px;
    color:rgba(170, 171, 171, 1);
`


export const Black = styled(Text)`
    color:rgba(0,0,0, 1) ;
`

export const TextWrap = styled(View)`
    flex-direction: column;
    padding: 10px 16px;
    width: 70%;
`

export const Wrap = styled(View)`
    flex-direction: row;
    align-items: center;
`
export const Piggy = styled(View)`
    padding-top:70% ;
    align-items: center;
    align-self: center;
    justify-self: center;
`