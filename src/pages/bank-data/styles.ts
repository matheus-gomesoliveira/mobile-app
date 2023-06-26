import { Text, View } from "react-native";
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

export const Content = styled(View)`
    flex: 10;
`

export const AuxView = styled(View)`
    height: 24px;
    width: 24px;
`

export const WhiteBoard = styled(View)`
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

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: 400;
    color:rgba(255,255,255,1);
`