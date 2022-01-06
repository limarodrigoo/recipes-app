import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MealPage from './pages/MealPage';
import MealsDetails from './pages/MealsDetails';
import DrinksDetails from './pages/DrinksDetails';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ MealPage } />
        <Route exact path="/bebidas" />
        <Route exact path="/comidas/:id" component={ MealsDetails } />
        <Route exact path="/bebidas/:id" component={ DrinksDetails } />
        <Route exact path="/comidas/{id-da-receita}/in-progress" />
        <Route exact path="/bebidas/{id-da-receita}/in-progress" />
        <Route exact path="/explorar" />
        <Route exact path="/explorar/comidas" />
        <Route exact path="/explorar/bebidas" />
        <Route exact path="/explorar/comidas/ingredientes" />
        <Route exact path="/explorar/bebidas/ingredientes" />
        <Route exact path="/explorar/comidas/area" />
        <Route exact path="/perfil" />
        <Route exact path="/receitas-feitas" />
        <Route exact path="/receitas-favoritas" />
      </Switch>
    </div>
  );
}

export default App;
