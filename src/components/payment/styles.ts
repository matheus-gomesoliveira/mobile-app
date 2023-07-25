import { Text } from "react-native";
import { View } from "react-native-animatable";
import styled from "styled-components";

export const Container = styled(View)`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color:#FFFFFF;
    flex: 1;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 20px 36px;
`

export const Title = styled(Text)`
    font-weight: 700;
    font-size: 26px;
    color:rgba(0,0,0,1);
`

export const BoldText = styled(Text)`
    font-weight: 700;
    font-size: 16px;
    color:rgba(0,0,0,1);
`

export const RegularText = styled(Text)`
    font-size: 16px;
    color:rgba(0,0,0,1);
`

export const Header = styled(View)`
    gap:5px
`

export const Line = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Origin = styled(View)`
    padding-top: 25px;
    gap:10px
`

export const Destiny = styled(View)`
    padding-top: 25px;
    gap:10px
`