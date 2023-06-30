import {AxiosError, AxiosResponse} from 'axios';
import apiManager from './ApiManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserLogin = async (data: any) => {
  try {
    const res = await apiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        cpf: data.cpf,
        senha: data.senha,
      },
    });
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const GetUserData = async () => {
  try {
    const token = await AsyncStorage.getItem('AccessToken');
    const res = await apiManager('/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res
  } catch (e) {
    console.log(e);
  }
};

interface AddressData {
  cep: string | undefined;
  rua: string | undefined;
  bairro: string | undefined;
  cidade: string | undefined;
  numero: string | undefined;
  uf: string | undefined;
  complemento: string | undefined;
}

export const changeAdressData = async (data: AddressData) => {
  try {
    const token = await AsyncStorage.getItem('AccessToken');
    const res = await apiManager('/address', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        ...data,
      },
    });
    console.log(res);
    return res;
  } catch (e:unknown) {
    if(e instanceof AxiosError){
      console.log(e);
      return e;
    }
  }
};

interface ChangePassword{
  password:string | undefined
  newPassword:string | undefined
  confirm:string | undefined
}

export const changeAppPassword = async (data: ChangePassword) =>{
  try {
    const token = await AsyncStorage.getItem('AccessToken')
    const res = await apiManager("/users/password",{
      method:'PUT',
      headers:{
        Authorization:`Bearer ${token}`
      },
      data:{
        senha_atual:data.password,
        nova_senha:data.newPassword,
        confirmar_nova_senha:data.confirm
      }
    })
    return res
  } catch (e) {
    console.log(e)
    return(e)
  }
}

interface data{
  usuario:{
    nome_completo:string
    telefone:string
    email:string
    cpf:string
    senha:string
    data_nascimento:string
    endereco:{
      cep:string
      rua:string
      bairro:string
      cidade:string
      numero:string
      uf:string
      complemento:string | undefined
    },
    conta_bancaria:{
      senha_transacional:string
    }
  }
}

export const Onboarding = async (data:data) =>{
  try {
    const token = await AsyncStorage.getItem('AccessToken')
    const res:AxiosResponse = await apiManager("/register",{
      method:'POST',
      headers:{
        Authorization:`Bearer ${token}`
      },
      data:{
        ...data
      }
    })

    return res
  } catch (e: unknown) {
    if(e instanceof AxiosError)
      console.log(e)
  }
}
