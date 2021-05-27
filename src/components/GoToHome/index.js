import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function GoToHome() {
    return (
        <Link to="/" className="go-to-home">
            Ir para a página inicial
        </Link>
    );
}
