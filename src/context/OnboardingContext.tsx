import React from "react"

export interface User{
    nome_completo:string
    email:string
    cpf:string
    data_nascimento:string
}

export interface Address{
    cep: string
    endereco:string
    numero:string
    complemento:string | undefined
    bairro:string
    cidade:string
    uf:string
}

export interface AppPassword{
    senha:string
    confirmar_senha:string
}

export interface TransactionPassword{
    senha:string
    confirmar_senha:string
}

export interface OnboardingData{
    usuario:User | null
    endereco:Address | null
    senha_app:AppPassword | null
    senha_transacional:TransactionPassword | null
}

interface OnboardingContextProps {
    onboardingData: OnboardingData;
    setOnboardingData: React.Dispatch<React.SetStateAction<OnboardingData>>;
  }

  export const OnboardingContext = React.createContext<OnboardingContextProps>({
    onboardingData: {
      usuario: null,
      endereco: null,
      senha_app: null,
      senha_transacional:null,
    },
    setOnboardingData: () => {},
  });