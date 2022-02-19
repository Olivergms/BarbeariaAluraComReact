import { useProducts } from '../../hooks/products';
import './styles.scss';


// interface IProduct{
//     id: number
//     title: string;
//     image: string;
//     description: string;
//     price: number;
// }

export function Card(){
    
    const {products} = useProducts(); 
      
    return(

        <ul 
        className="card-product">
            {products?.map(product => (
                
                <li
                key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt="Imagem do produto" />
                    <p>{product.description}</p>
                    <h3>{new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                         currency: 'BRL'
                     }).format(product.price)}</h3>
                </li>
            ))}
        </ul>       
        
    );
}