import React, { useState } from 'react'; //Aquí decimo que importe (traiga y póngame aquí) React de la dependencia "react" que fue la instalaste cuando configuraste el proyecto.
import { Layout } from './container/Layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';

import CalendarPage from './pages/Calendar/CalendarPage';
import { MyCalendar } from './components/BigCalendar/MyCalendar';
import { NuevaCita } from './container/NuevaCita/NuevaCita';
import { AddCliente } from './container/AddCliente/AddCliente';
import { FacturaAbierta } from './pages/Ventas/FacturaAbierta/FacturaAbierta';

//Vas a hacer una "const" que será una cajita. Le pondrás el nombre de App

const App = () => {
		//la cajita por dentro tiene una función flecha. 
		//la función flecha dice que cuando abras la cajita va a devolver algo.
      const [login, setLogin] = useState(false);
      console.log(login);
   return (

		<BrowserRouter>
         <Layout>
            <Routes>
           
               <Route path="/home" element={<Home />} />
               <Route path="/calendar" element={<CalendarPage />} />
               <Route path="/myCalendar" element={<MyCalendar />} />
               <Route path="/cita" element={<NuevaCita />} />
               <Route path="/addCliente" element={<AddCliente />} />
               <Route path='/FacturaAbierta' element={<FacturaAbierta />} />
            </Routes>
         </Layout>
      </BrowserRouter>
      
   );
};

export default App; //Aquí estás haciendo que exporte de manera predeterminada App.
