import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiManager from "./ApiManager"
import { Axios, AxiosError } from "axios";

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
