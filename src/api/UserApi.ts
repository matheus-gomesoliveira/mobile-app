import {AxiosError} from 'axios';
import apiManager from './ApiManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserLogin = async (data: any) => {
  try {
    const result = await apiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        cpf: data.cpf,
        senha: data.senha,
      },
    });
    return result;
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
    console.log(data);
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
  } catch (e) {
    console.log(e);
    return e;
  }
};
