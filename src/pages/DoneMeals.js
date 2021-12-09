import React from 'react';
import Header from '../components/Header';

class DoneMeals extends React.Component {
  render() {
    return (
      <div>
        <Header title="Receitas Feitas" showButton={ false } />
      </div>
    );
  }
}

export default DoneMeals;
