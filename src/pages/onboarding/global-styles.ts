import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-animatable";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    background-color:#FFFFFF;
    box-sizing: border-box;
    padding: 15% 36px 8% ;
    justify-content: space-between;
`
export const StatusBar = styled(View)`
    flex-direction: row;
    height: 5px;
    background-color: rgba(210, 210, 210, 1);
    border-radius: 50px;
`

export const BarStatus = styled(View)`
    width: 20%;
    height: 100%;
    background-color:rgba(107, 122, 229, 1);
    border-radius: 50px;
`
export const Title = styled(Text)`
    font-size: 24px;
    color:rgba(56, 56, 56, 1);
    text-align: center;
`

export const InfoText = styled(Text)`
    color: rgba(170, 171, 171, 1);
    font-weight: 400;
    font-size: 12px;
    width: 80%;
`

export const PasswordInfoText = styled(Text)`
    color:rgba(0, 32, 74, 1);
    font-weight: bold;
    font-size: 12px;
`

export const Strong = styled(Text)`
    font-weight: 700;
`

export const Input = styled(TextInputMask)`
    width: 100%;
    border-bottom-width:1px ;
`

export const SmallInput = styled(TextInput)`
    border-bottom-width:1px ;
`

export const NoMaskInput = styled(TextInput)`
    width: 100%;
    border-bottom-width:1px ;
`
export const Label = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: normal;
    font-size: 12px;
`
export const ButtonView = styled(View)`
    box-sizing: border-box;
    padding-top: 20px;
`

export const Button =  styled(TouchableOpacity)<{isLogin?: boolean}>`
    align-self: center ;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(29, 28, 62, 1);
    padding: ${(props)=>props.isLogin?"10px": "0px"};
`

export const ButtonTitle = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
`

export const LogInButton = styled(TouchableOpacity)`
    margin-top: 20px;
    height: 48px;
    width: 240px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: rgba(29, 28, 62, 1);
`

export const TextButton = styled(Text)`
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`

export const SmallText = styled(Text)`
    font-size: 12px;
    font-weight: 400;
    color: #f70d1a;
`

export const Error = styled(View)`
    justify-content: center;
    box-sizing: border-box;
    padding: 1px;
`
//WRAPERS//

export const Wrap = styled(View)`

`

export const SameLineInputs = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const CepTitleWrap = styled(View)`
    align-self: center;
    width: 80%;
`
export const CepWrap = styled(View)`
    height: 100%;
    justify-content: space-between;
`

export const Header = styled(View)`
    gap: 20px;
`

export const InputLabelBox = styled(View)`
    width: 47%;
`

export const InputLabelBigBox = styled(View)`
    width: 77%;
`

export const InputLabelSmallBox = styled(View)`
    width: 17%;
`

export const InputLabel = styled(View)`
    padding-top: 20px;
`
export const Info = styled(View)`
    padding-top: 40px;
    flex-direction: row;
    align-self: flex-start;
    gap:10px;
    align-items:center;
`

export const PasswordInfo = styled(View)`
    padding-bottom: 20px;
    flex-direction: row;
    gap:10px;
    align-items:center;
    align-self: center;
`



