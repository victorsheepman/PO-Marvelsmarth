import React from'react'; // Aquí importas React de la dependencia "react"
import reactDom from'react-dom'; // Aquí importas reactDom de la dependencia "react-dom"
import App from'./App' ; // Aquí importas React de la dependencia "react"
import './styles/main.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
reactDom.render(<App/>, document.getElementById('root'));