import React from 'react';

export interface User {
  id:number
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  data_nascimento: string;
}

export interface Address {
  rua: string;
  bairro: string;
  numero: string;
  cep: string;
  cidade: string;
  uf: string;
  complemento: string;
}

export interface Account {
  banco: string;
  agencia: string;
  numero_conta: number;
  saldo: string;
}

export interface UserData {
  usuario: User | null;
  endereco: Address | null;
  conta: Account | null;
}

interface UserContextProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserContext = React.createContext<UserContextProps>({
  userData: {
    usuario: null,
    endereco: null,
    conta: null,
  },
  setUserData: () => {},
});
