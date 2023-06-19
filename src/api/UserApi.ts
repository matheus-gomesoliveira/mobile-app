import ApiManager from "./ApiManager";

export const UserLogin = async (data:any) =>{
    try {
        const result = await ApiManager("/login", {
            method:"POST",
            headers:{
                'content-type':"applicationl/json"
            },
            data:data
        })
    } catch (error) {
        return error
    }
}