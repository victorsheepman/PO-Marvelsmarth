import React, { useState } from 'react'; //Aquí decimo que importe (traiga y póngame aquí) React de la dependencia "react" que fue la instalaste cuando configuraste el proyecto.
import { Layout } from './container/Layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
//Vas a hacer una "const" que será una cajita. Le pondrás el nombre de App

const App = () => {
		//la cajita por dentro tiene una función flecha. 
		//la función flecha dice que cuando abras la cajita va a devolver algo.
      const [login, setLogin] = useState(false);
      console.log(login);
   return (
      <>
		<BrowserRouter>
         <Routes>
            {
               login ?
               <>
                  <Layout>
                     <Route path='/home' element={<Home />} />
                  </Layout>
               
               </>
               : <Route path='/login' element={<Login setLogin={setLogin} login={login} />} />
            }
             <Route
              path="*"
              element={<Navigate to="/login" />}
            /> 

         </Routes>
      </BrowserRouter>
      </>
   );
};

export default App; //Aquí estás haciendo que exporte de manera predeterminada App.
