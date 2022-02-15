import logoImg from '../../assets/logo.png';

import './styles.scss'


export function Header(){
    return(
        <header>
            <a href="#">
                <img src={ logoImg } alt="Logo Barbearia alura" />
            </a>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="#">Início</a>
                    </li>

                    <li>
                        <a href="#">Produtos</a>
                    </li>

                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}