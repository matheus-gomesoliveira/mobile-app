import { AxiosError } from "axios";
import ApiManager from "./ApiManager";

export const UserLogin = async (data:any) =>{
    try {
        const result = await ApiManager("/login", {
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            data:{
                cpf:data.cpf,
                senha:data.senha
            }
        })
        return result
    } catch (error: any) {
        const errorAxios: AxiosError = error
        return errorAxios.response?.data
    }
}