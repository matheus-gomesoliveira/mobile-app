import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

interface FeatureBoxProps{
    imageSource:string,
    text:string
}

export const Container = styled(View)`
    flex: 1;
    background-color: #1D1C3E;
`

export const MainSection = styled(View)`
    flex: 1;
    box-sizing: border-box;
    padding: 2% 24px;
    justify-content: space-around;
`

export const BalanceTitle = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
`
export const Balance = styled(Text)`
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;

`
export const BoxText = styled(Text)`
    font-size: 14px;
    font-weight: 400;
    color: #181818;
`

export const BalanceWrapper = styled(View)`
    box-sizing: border-box;
    flex-direction: column;

`

export const BalanceVisible = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const MainHeaderWrapper = styled (View)`
    flex-direction: row;
    justify-content:space-between;
`

export const FeaturesSection = styled(View)`
    flex: 4;
`

export const Features = styled(View)`
    justify-content: space-between;
    box-sizing: border-box;
    flex-direction: row;
    padding: 40px 24px;
    background-color: #FFFFFF;
    height: 100%;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    flex-wrap: wrap;
`

export const FeatureBox = styled(TouchableOpacity)`
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 3%;
    background-color:#FFFFFF ;
    border-radius: 6px;
    width: 44%;
    elevation:5;
    height: 20%;
    margin-bottom: 10%;
`