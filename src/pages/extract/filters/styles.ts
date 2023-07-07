import { Text, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components";



export const Container = styled(View)`
    flex: 1;
    background-color: #1D1C3E;
`

export const Header = styled(View)`
    padding: 25px 0 48px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    width: 100%;
`

export const WhiteBoard = styled(View)`
    margin-top: 23px;
    flex: 1;
    background-color: #FFFFFF;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    box-sizing: border-box;
    padding: 0 36px;
    justify-content: space-between;
`

export const Content = styled(View)`
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30% 36px 0;
    align-items: center;
`


export const BigText = styled(Text)`
    font-size:16px ;
    font-weight: 400;
    color:rgba(0, 0, 0, 1);
`

export const MediumText = styled(Text)`
    font-size: 14px;
`
export const Title = styled(Text)`
    font-size: 18px;
    color: black;
`

export const SmallText = styled(Text)`
    font-size: 12px;
    color:rgba(0, 0, 0, 1);
`

export const Strong = styled(Text)`
    font-weight: 700;
`

export const Orange = styled(Text)`
    color:rgba(241, 88, 12, 1)
`

export const TextWrapper = styled(View)`
    flex-direction: column;
`

export const FilterButton = styled(TouchableOpacity)`
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border: rgba(170, 171, 171, 1) 2px;
`

export const FilterRow = styled(View)`
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0;
`

export const DateSection = styled(View)`
    flex-direction: column;
`

export const Others = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
`

export const Input = styled(TextInputMask)`
    width: 100%;
    border-bottom-width:1px ;
`
export const Label = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: normal;
    font-size: 12px;
`
export const InputLabel = styled(View)`
    width: 47%;
    padding-bottom: 20px;
`

export const SameLineInputs = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const Order = styled(View)`
    flex-direction: column;
    gap:20px
`

export const OrderType = styled(View)`
`

export const FilterOrder = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Select = styled(TouchableOpacity)<{isSelect?: boolean}>`
    border:${(props)=>props.isSelect?'2px':'1px'};
    border-radius: 30px;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    align-items: center ;
    justify-content: center;
`

export const Ball = styled(View)`
    background-color: rgba(29, 28, 62, 1) ;
    border-radius: 30px;
    width: 12px;
    height: 12px;
`

export const Button =  styled(TouchableOpacity)`
    align-self: center ;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(29, 28, 62, 1);
`

export const ButtonTitle = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
`

export const Transparent = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`

export const Filters = styled(View)`

`

export const BottomSection = styled(View)`
`



