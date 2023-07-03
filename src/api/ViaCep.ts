import axios, { AxiosResponse } from "axios";


interface Address {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }


const ViaCep = async(cep: string | undefined)=>{
    try {
        const res: AxiosResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return res
    } catch (e) {
        console.log(e)
    }
}

export default ViaCep
