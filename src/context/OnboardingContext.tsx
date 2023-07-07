import React from "react"

export interface User{
    nome_completo:string
    telefone: string
    email:string
    cpf:string
    senha:string
    data_nascimento:string
}

export interface Address{
    cep: string | undefined
    rua:string | undefined
    numero:string | undefined
    complemento:string | undefined
    bairro:string | undefined
    cidade:string | undefined
    uf:string | undefined
}

export interface Account{
    senha_transacional:string
}

export interface OnboardingData{
    usuario:User | null
    endereco:Address | null
    conta_bancaria:Account | null
}

interface OnboardingContextProps {
    onboardingData: OnboardingData;
    setOnboardingData: React.Dispatch<React.SetStateAction<OnboardingData>>;
  }


  export const OnboardingContext = React.createContext<OnboardingContextProps>({
    onboardingData: {
      usuario: null,
      endereco: null,
      conta_bancaria: null,
    },
    setOnboardingData: () => {},
  });