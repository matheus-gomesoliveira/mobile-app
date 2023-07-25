import React, { useState } from 'react';

export interface Transfer{
    destino:string
    valor:number
    senha_transacional:string
    descricao?:string
}

interface TransferContextProps {
  transfer: Transfer | null;
  setTransfer: React.Dispatch<React.SetStateAction<Transfer | null>>;
}

export const TransferContext = React.createContext<TransferContextProps>({
  transfer:null,
  setTransfer: () => {},
});