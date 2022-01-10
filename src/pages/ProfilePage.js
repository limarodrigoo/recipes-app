import React from 'react';
import Header from '../components/Header';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <Header title="Perfil" showButton={ false } />
      </div>
    );
  }
}

export default ProfilePage;
