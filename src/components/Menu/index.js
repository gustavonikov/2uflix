//É tudo que vai aparecer na tela inicial da nossa página
import React from 'react';
import Logo from '../../assets/imgs/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../Menu/components/ButtonLink';


function Menu () {
    return (
        <nav className="Menu"> {/* Pode ser header também, mas como vão ter poucos elementos, pode ser nav = navigation*/}
            <a href="/">
            <img className="Logo" src={Logo} alt="2UFLIX Logo"/>
            </a>
            
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;