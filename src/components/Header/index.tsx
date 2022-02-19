import logoImg from '../../assets/logo.png';
import {Link} from 'react-router-dom';

import './styles.scss'


export function Header(){
    return(
        <header>
            <Link to="/">
                <img src={ logoImg } alt="Logo Barbearia alura" />
            </Link>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/">Início</Link>
                    </li>

                    <li>
                        <Link to="/products">Produtos</Link>
                    </li>

                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}