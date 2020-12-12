import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/home";
import Nosotros from "../Pages/Nosotros";
import Todos from "../Pages/Todos";
import Artec from "../Pages/Artec";
import Dibujo from "../Pages/Dibujo";
import Artes from "../Pages/Artes";
import Uso from "../Pages/Uso";
import Lettering from "../Pages/Lettering";
import Ingresa from "../Pages/Ingresa";
import Contactanos from "../Pages/Contactanos";

function Router() {
    return (
        <BrowserRouter basename="artvibe-react">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/nosotros" exact>
                    <Nosotros />
                </Route>
                <Route path="/todos" exact>
                    <Todos />
                </Route>
                <Route path="/artec" exact>
                    <Artec />
                </Route>
                <Route path="/dibujo" exact>
                    <Dibujo />
                </Route>
                <Route path="/artes" exact>  
                    <Artes />
                </Route>
                <Route path="/uso" exact>
                    <Uso />
                </Route>
                <Route path="/lettering" exact>
                    <Lettering />
                </Route>
                <Route path="/ingresa" exact>
                    <Ingresa />
                </Route>
                <Route path="/contactanos" exact>
                    <Contactanos />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;