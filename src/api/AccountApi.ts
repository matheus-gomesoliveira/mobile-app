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
    id_transferencia: number;
    conta_destino: number;
    conta_origem: number;
    data_transferencia:{
        data:string,
        hora:string
    } ;
    descricao: string;
    status: string;
    tipo: string;
    valor: string;
}

export interface Extract{
    transferencias: Transfer[]
    paginas:{
        pagina:number,
        total:number
    }
}

export interface DataParams{
    page?: string 
    type?:  string 
    order?:  string 
    start_date?:  string 
    end_date?:  string 
}


export const getExtract = async (data?:DataParams) => {
    try {
        console.log(data)
        const queryParams = new URLSearchParams()

        if(data?.page != ""){
            queryParams.append("page", data?.page as string)
        }
        const url = `/extract/?${queryParams.toString()}`
        console.log(url)
        const token = await AsyncStorage.getItem('AccessToken')
        const res = await ApiManager.get<Extract>(url, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log("pagina:"+data?.page)
        return res.data
    } catch (e: unknown) {
        if(e instanceof AxiosError)
            console.log(e)
        console.log(e)
    }
}
