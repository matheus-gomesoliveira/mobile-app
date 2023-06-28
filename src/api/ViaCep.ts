import axios from "axios";


interface Address {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }


const ViaCep = async(cep: string | undefined)=>{
    try {
        const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return res
    } catch (e) {
        console.log(e)
    }
}

export default ViaCep
