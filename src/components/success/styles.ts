import { View, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)` 
    flex:1;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    padding: 60% 36px 8%;
`

export const LogoTitle = styled(View)`
    align-self: center;
`

export const Title =  styled(Text)` 
    font-size: 20px;
    font-weight: 700;
    color: #383838;
    padding: 30px 36px 0;
    text-align: center;

`
export const Subtitle = styled(Text)`
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    padding-top: 30px;
`

export const allign = styled(View)`
    align-self: center;
    justify-content: center;
`