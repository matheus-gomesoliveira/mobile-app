import { Modal, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex:1;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, 0.64);
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled(View)`
    width:80%;
`

export const Button = styled(TouchableOpacity)`
    align-self: flex-end ;
    font-weight: 600;
    padding: 12px 0;
`

export const TextButton = styled(Text)`
    color: #FFFFFF;
`

export const ModalBox = styled(View)`
    box-sizing: border-box;
    padding: 33.75px;
    background-color: #FFFFFF;
    width: 100%;
    justify-content: center;
    align-items: center;

`

export const Title = styled(Text)`
    padding-top: 23.75px;
    padding-bottom: 4px;
    font-size: 20px;
    font-weight: 500;
    color:#000000;
`

export const Subtitle = styled(Text)`
    font-size: 14px;
    font-weight: 400;
    color: #000000;
`