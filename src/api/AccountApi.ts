import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiManager from "./ApiManager"
import { Axios, AxiosError, AxiosResponse } from "axios";

export const GetAccountBalance  = async ()=>{
    try {
        const token = await AsyncStorage.getItem("AccessToken");

        const res = await ApiManager('/balance', {
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        return res;
        
    } catch (e) {
        console.log(e)
    }

}

interface changeTransactional{
    password: string | undefined
    newPassword: string | undefined
    confirm: string | undefined
}
 
export const changeTransactionPassword = async (data:changeTransactional) => {
    try {
        const token = await AsyncStorage.getItem('AccessToken')

        const res = await ApiManager('/account/transaction-password',{
            method:"PUT",
            headers:{
                Authorization:`Bearer ${token}`
            },
            data:{
                senha_atual:data.password,
                nova_senha:data.newPassword,
                confirmar_nova_senha:data.confirm
            }
        })
        console.log(res.data)
        return res
    } catch (e: unknown) {
        if(e instanceof AxiosError){
            console.log(e.response?.data.errors[0].message)
        }
    }
}

export interface Transfer{
    conta_destino: number;
    conta_origem: number;
    data_transferencia: string;
    descricao: string;
    id_transferencia: number;
    status: string;
    tipo: string;
    valor: string;
}

export interface Extract{
    transferencias: Transfer[]
}

export const getExtract = async () => {
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const res = await ApiManager.get<Extract>('/extract', {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log(res)
        return res.data
    } catch (e: unknown) {
        if(e instanceof AxiosError)
            console.log(e)
        console.log(e)
    }
}
