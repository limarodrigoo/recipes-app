import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

function ProfilePage() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const handleExitBtn = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Header title="Perfil" showButton={ false } />
      <div>
        <p data-testid="profile-email">{ email }</p>
        <div>
          <button
            onClick={ () => history.push('/receitas-feitas') }
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
          <button
            onClick={ () => history.push('/receitas-favoritas') }
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
          <button
            onClick={ handleExitBtn }
            type="button"
            data-testid="profile-logout-btn"
          >
            Sair
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
