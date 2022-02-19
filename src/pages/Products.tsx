
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {ProductsProvider} from '../hooks/products'


export function Products(){
    
    return(
        <div >
            <Header />
            <ProductsProvider>
                <Card />
            </ProductsProvider>
            
            <Footer />
        </div>
    );
}