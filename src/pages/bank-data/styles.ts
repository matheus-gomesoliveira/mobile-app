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
    flex-direction: column;
    padding: 40px 36px 40px 36px;
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

export const Strong = styled(Text)`
    font-weight: 700;
`

export const CopyIcon = styled(TouchableOpacity)`
    flex-direction: column;
    align-items: center;
`

export const TitleInfo = styled(View)`
    flex-direction: column;
    gap:8px;
`

export const BigText = styled(Text)`
    font-size: 16px;
    color:rgba(0,0,0,1);
    width: 80%;
    padding-bottom: 8px;
`

export const MediumText = styled(Text)`
    font-size: 14px;
    color:rgba(0,0,0,1);
`

export const SmallText = styled(Text)`
    font-size: 10px;
    color:rgba(107,122,229,1);
`
export const Info = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
`

export const Button = styled(TouchableOpacity)`
    width: 100%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border: rgba(56, 56, 56, 1) 1px;
    border-radius: 50px;
`
export const ButtonView = styled(View)`
    box-sizing: border-box;
    padding-top: 20px;
`

export const ButtonText = styled(Text)`
    color: rgba(56, 56, 56, 1);
    font-size: 16px;
    font-weight: 500;
`