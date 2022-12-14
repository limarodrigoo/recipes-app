import React from 'react';
import { Switch, Route } from 'react-router';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MealPage from './pages/MealPage';
import MealsDetails from './pages/MealsDetails';
import DrinksDetails from './pages/DrinksDetails';
import DrinkPage from './pages/DrinkPage';
import Explore from './pages/Explore';
import ExploreMeal from './pages/ExploreMeal';
import ExploreDrink from './pages/ExploreDrink';
import MealIngredients from './pages/MealIngredients';
import DrinkIngredients from './pages/DrinkIngredients';
import SearchByArea from './pages/SearchByArea';
import ProfilePage from './pages/ProfilePage';
import FavoriteMeals from './pages/FavoriteMeals';
import DoneRecipes from './pages/DoneRecipes';
import Footer from './components/Footer';
import IngredientsCard from './pages/IngredientsCard';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/bebidas" component={ DrinkPage } />
        <Route exact path="/comidas" component={ MealPage } />
        <Route exact path="/comidas/:id" component={ MealsDetails } />
        <Route exact path="/bebidas/:id" component={ DrinksDetails } />
        <Route exact path="/comidas/{id-da-receita}/in-progress" />
        <Route exact path="/bebidas/{id-da-receita}/in-progress" />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreMeal } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ MealIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ DrinkIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ SearchByArea } />
        <Route exact path="/perfil" component={ ProfilePage } />
        <Route exact path="/receitas-feitas" component={ DoneRecipes } />
        <Route exact path="/receitas-favoritas" component={ FavoriteMeals } />
        <Route exact path="/comidas" component={ IngredientsCard } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
