// É tudo que vai aparecer na tela inicial da nossa página
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../Menu/components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu"> {/* Pode ser header também, mas como vão ter poucos elementos, pode ser nav = navigation */}
            <Link to="/">
                <img className="Logo" src={Logo} alt="2UFLIX Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
