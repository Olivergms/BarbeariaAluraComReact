import {createContext, useEffect, useState, ReactNode, useContext} from 'react'
import { api } from "../services/api";


interface IProduct{
    id: number,
    title: string,
    description: string,
    image: string,
    price: number
}

interface IProductsProviderProps{
    children: ReactNode;
}

interface IProductsContextData{
    products: IProduct[],
}

const ProductsContext = createContext<IProductsContextData>({} as IProductsContextData);

export function ProductsProvider({children} : IProductsProviderProps){
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products')
            .then(response => setProducts(response.data));
    }, []);
    
    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProducts(){
    const context = useContext(ProductsContext);
    return context;
}



