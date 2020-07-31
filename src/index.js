import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home/index';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} /> {/* pra saber que quando o caminho digitado for ex: www.gugu.com/ a rota direcione para o App */}
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={() => <div><h1>Erro 404</h1></div>} />
        </Switch>

    </Router>,
    document.getElementById('root'),
);
