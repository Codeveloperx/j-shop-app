// import Navbar from 'components/Navbar';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header';
import NavbarComponent from 'components/Navbar';
import ShopComponent from 'components/ShopComponent';
import Shop2Component from 'components/Shop2Component';
import Section3 from 'components/Section3';
import Companies from 'components/Companies';
import FormComponent from 'components/Form';
import ContainerContact from 'containers/ContainerContact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <NavbarComponent/>
      <Header/>
      <ShopComponent/>
      <Shop2Component/>
      <Section3/>
      <Companies/>
      <FormComponent/>
      <ContainerContact/>
    </div>
  </React.StrictMode>
);
