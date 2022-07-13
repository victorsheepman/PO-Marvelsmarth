import React from 'react'; //Aquí decimo que importe (traiga y póngame aquí) React de la dependencia "react" que fue la instalaste cuando configuraste el proyecto.
import { Layout } from './container/Layout/Layout';

//Vas a hacer una "const" que será una cajita. Le pondrás el nombre de App

const App = () => {
		//la cajita por dentro tiene una función flecha. 
		//la función flecha dice que cuando abras la cajita va a devolver algo.
    return (
				//aquí está lo que la función flecha devuelve
       <Layout>
          <h1>hey</h1>
       </Layout>
    );
};

export default App; //Aquí estás haciendo que exporte de manera predeterminada App.
