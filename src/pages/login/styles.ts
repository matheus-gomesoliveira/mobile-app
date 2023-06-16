import styled from 'styled-components';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';


export const Container = styled(View)`
    flex: 1;
    padding: 0 36px;
    padding-top: 10%;
    padding-bottom: 20px;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #FFFFFF;
`

export const RegularText = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: normal;
    font-size: 16px;
`
export const RegularLinkText = styled(Text)` 
    color:rgba(107, 122, 229, 1);
    font-weight: bold;
    font-size: 16px;
`

export const SmallText = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: normal;
    font-size: 14px;
`
export const BigText = styled(Text)` 
    color:rgba(29, 28, 62, 1);
    font-weight: bold;
    font-size: 20px;
`

export const Button =  styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 90%;
    height: 48px;
    border-radius: 500px;
    background-color: rgba(29, 28, 62, 1);
`

export const TextButton = styled(Text)`
    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
`

export const Input = styled(TextInputMask)`
    width: 100%;
    border-bottom-width:1px ;
`

export const InputSenha = styled(TextInput)`
    width: 100%;
    border-bottom-width:1px ;
`

//WRAPPERS//

export const Wrapper = styled(View)`
    width: 100%;
    justify-content: space-between;
    gap:66px;
`

export const TextWrapper = styled(View)`
    width: 100%;
`

export const InputsWrapper = styled(View)`
    width: 100%;
    gap: 30px;
`

export const LabelPlaceholderWrapper = styled(View)`
    width: 100%;
`

export const TitleInputWrapper = styled(View)`
    width: 100%;
    padding-bottom: 20px;
    gap:40px;
`

export const ButtonWrapper = styled(View)`
    width: 100%;
    align-self: center;
    align-items: center;
    gap:21px;
`
