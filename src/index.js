import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";

ReactDOM.render(
  <Router>
    <Switch> 
      <Route exact path="/" component={Home} /> {/* pra saber que quando o caminho digitado for ex: www.gugu.com/ a rota direcione para o App */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={ () => <div>Erro 404</div>} />
    </Switch>

  </Router>,
  document.getElementById("root")
);

