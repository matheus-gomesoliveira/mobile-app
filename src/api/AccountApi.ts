import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiManager from './ApiManager';
import {Axios, AxiosError, AxiosResponse} from 'axios';

export const GetAccountBalance = async () => {
  try {
    const token = await AsyncStorage.getItem('AccessToken');

    const res = await ApiManager('/balance', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};

interface changeTransactional {
  password: string | undefined;
  newPassword: string | undefined;
  confirm: string | undefined;
}


export const changeTransactionPassword = async (data: changeTransactional) => {
  try {
    const token = await AsyncStorage.getItem('AccessToken');

    const res = await ApiManager('/account/transaction-password', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        senha_atual: data.password,
        nova_senha: data.newPassword,
        confirmar_nova_senha: data.confirm,
      },
    });
    console.log(res.data);
    return res;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      console.log(e.response?.data.errors[0].message);
    }
  }
};

export interface Transfer {
  id_transferencia: number;
  conta_destino: number;
  conta_origem: number;
  data_transferencia: {
    dia: string;
    hora: string;
  };
  descricao: string;
  status: string;
  tipo: string;
  valor: string;
  message: string
}


export interface Extract {
  transferencias: Transfer[];
  paginas: {
    pagina: number;
    total: number;
  };
  message?: string
}

export interface DataParams {
  page?: string;
  type?: string;
  order?: string;
  start_date?: string;
  end_date?: string;
}

export const getExtract = async (data?: DataParams) => {
  try {
    const queryParams = new URLSearchParams();

    if (data?.page != '') {
      queryParams.append('page', data?.page as string);
    }


    if (data?.type != '') {
      queryParams.append('type', data?.type as string);
    }


    if (data?.order == '') {
      queryParams.append('order', '');
    } else {
      queryParams.append('order', data?.order as string);
    }
    
    if(data?.start_date == ''){
      queryParams.append('start_date', '')
    } else {
      queryParams.append('start_date', data?.start_date as string)
    }

    if(data?.end_date == ''){
      queryParams.append('end_date', '')
    } else {
      queryParams.append('end_date', data?.end_date as string)
    }

    const url = `/extract/?${queryParams.toString()}`;
    console.log('URL:', url)
    const token = await AsyncStorage.getItem('AccessToken');
    const res = await ApiManager.get<Extract>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) console.log(e);
    console.log(e);
  }
};

interface DetailedTransfer{
  transferencia:{
    id_transferencia:number
    nome_origem:string
    nome_destino:string
    conta_origem:number
    conta_destino:number
    cpf_origem:string
    cpf_destino:string
    data_transferencia:{
      dia:string,
      hora:string,
    }
    valor:string
    descricao?:string
    tipo:string
  }
}

export const getTransfer = async (id_transfer: string)=>{
  try {
    const token = await AsyncStorage.getItem('AccessToken')
    const res = await ApiManager.get<DetailedTransfer>(`transfer/${id_transfer}`,{
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
    return res.data
  } catch (e) {
    if(e instanceof AxiosError)
      console.log(e)
    console.log(e)
  }
}

interface TransferRes{
  id?:string
  error?:string
  status?:string
  message:string
}

export interface TransferData{
  destino: string
  valor: number
  senha_transacional: string
  descricao ?:string
}

export const Transfer = async (data:TransferData) => {
    try {
      const token = await AsyncStorage.getItem('AccessToken')
      const res = await ApiManager<TransferRes>('/transfer', {
        method:'POST',
        headers:{
          Authorization:`Bearer ${token}`
        },
        data: data
      })
      return res.data
    } catch (e) {
      if(e instanceof AxiosError){
        const error = e.response?.data as TransferRes 
        return error
      }
    }
}

interface DestinyData{
  dados?:{
    nome:string
    numero_conta:string
  }
  error?:string
  message?:string
}

interface ResError{
  dados?:{
    nome:string
    numero_conta:string
  }
  error?:string
  message?:string
}

export const getDestinyData = async (identification:string) => {
  try {
    const token = await AsyncStorage.getItem('AccessToken')
    const res = await ApiManager<DestinyData>('/account', {
      method:'POST',
      headers:{
        Authorization:`Bearer ${token}`
      },
      data:{
        identificacao:identification
      }
    })
    return res.data
  } catch (e) {
    if(e instanceof AxiosError){
      console.log(e)
      const error = e.response?.data as ResError
      return error
    }
  }
}