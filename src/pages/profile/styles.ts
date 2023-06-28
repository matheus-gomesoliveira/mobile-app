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

export const AuxView = styled(View)`
    height: 24px;
    width: 24px;
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

export const Icon = styled(View)`
    height: 60px;
    width: 60px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: rgba(107, 122, 229, 1);
    align-items: center;
    justify-content: center;
`

export const BigText = styled(Text)`
    font-size:16px ;
    font-weight: 400;
    color:rgba(0, 0, 0, 1);
`

export const MediumText = styled(Text)`
    font-size: 14px;
`
export const SmallText = styled(Text)`
    font-size: 10px;
    color:rgba(0, 0, 0, 1);
`

export const Strong = styled(Text)`
    font-weight: 500;
    color:rgba(56, 56, 56, 1);
`

export const Button = styled(TouchableOpacity)`
    width: 80%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border: rgba(56, 56, 56, 1) 1px;
    border-radius: 50px;
`

export const Option = styled(TouchableOpacity)`
    flex-direction: row;
    border-top-width: 0.5px;
    width: 100%;
    height: 75px;
    align-items: center;
    justify-content: space-between;
`
export const Options = styled(View)`
    width: 100%;
`

export const User = styled(View)`
    gap:10px;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const Wrap = styled(View)`
    align-items: center;
`