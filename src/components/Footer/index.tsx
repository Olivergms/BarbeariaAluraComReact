import logoBrancoImg from '../../assets/logo-branco.png';
import backgroundFooterImg from '../../assets/bg.jpg';
import './styles.scss';

export function Footer(){
    return (
        <footer >
            <img src={ logoBrancoImg } alt="Logo em branco" />
            <p>© Copyright Barbearia Alura - 2019</p>
        </footer>
    );
}