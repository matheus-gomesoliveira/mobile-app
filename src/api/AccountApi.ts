import AsyncStorage from "@react-native-async-storage/async-storage"
import ApiManager from "./ApiManager"

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