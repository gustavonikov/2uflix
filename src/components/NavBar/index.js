import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../assets/imgs/Logo.png';
import './index.css';
import Button from '../Button';

function NavBar({ page }) {
    return (
        <nav className="Menu"> {/* Pode ser header também, mas como vão ter poucos elementos, pode ser nav = navigation */}
            <Link to="/">
                <img className="Logo" src={Logo} alt="2UFLIX Logo" />
            </Link>

            {
                page === 'home'
                && (
                    <div className="button-wrapper">
                        <Button as={Link} className="ButtonLink" to="/cadastro/video">
                            Novo vídeo
                        </Button>
                        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
                            Nova categoria
                        </Button>
                    </div>
                )
            }
        </nav>
    );
}

NavBar.defaultProps = {
    page: '',
};

NavBar.propTypes = {
    page: PropTypes.string,
};

export default NavBar;
