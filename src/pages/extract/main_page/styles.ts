import { Text, TouchableOpacity, View } from "react-native";
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
    justify-content: space-between;
    box-sizing: border-box;
    padding: 35px 36px 40%;
    height: 100%;
    align-items: center;
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
