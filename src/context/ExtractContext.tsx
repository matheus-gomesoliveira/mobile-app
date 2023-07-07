import React from 'react';

export interface Params{
    page?: string 
    type?:  string 
    order?:  string 
    start_date?:  string 
    end_date?:  string 
}



interface ExtractContextProps {
  params: Params | null;
  setParams: React.Dispatch<React.SetStateAction<Params | null>>;
}

export const ExtractContext = React.createContext<ExtractContextProps>({
  params:null,
  setParams: () => {},
});