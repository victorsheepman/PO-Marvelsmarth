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
import { AddPropina } from './container/AddPropina/AddPropina';
import { Primas } from './container/Primas/Primas';
import { SelectTipoPago } from './container/SelectTipoPago/SelectTipoPago';
import { DividirPago } from './container/DividirPago/DividirPago';
import { VentasRapido } from './pages/Ventas/VentasRapido/VentasRapido';
import { CitasPage } from './pages/Ventas/CitasPage/CitasPage';
import { HistorialVentas } from './pages/Ventas/HistorialVentas/HistorialVentas';
import { DatosFactura } from './container/DatosFactura/DatosFactura';
import { ListaClientes } from './pages/Clientes/ListaClientes/ListaClientes';
import { Resenas } from './pages/Clientes/Resenas/Resenas';
import { Formularios } from './pages/Clientes/Formularios/Formularios';
import { Secciones } from './container/Secciones/Secciones';
import { HistorialServicios } from './pages/Clientes/HistorialServicios/HistorialServicios';
import ResumenInventario from './pages/Inventario/InfoGeneral/ResumenInventario';

//Vas a hacer una "const" que será una cajita. Le pondrás el nombre de App

const App = () => {
		//la cajita por dentro tiene una función flecha. 
		//la función flecha dice que cuando abras la cajita va a devolver algo.
      const [login, setLogin] = useState(false);
      console.log(login);
   return (

		<BrowserRouter>
        { <Layout>
            <Routes>
               
                  <Route path="/home" element={<Home />} /> //2
                  //1
                  <Route path="/calendar" element={<CalendarPage />} />//3
                  <Route path="/cita" element={<NuevaCita />} />//4
                  <Route path="/addCliente" element={<AddCliente />} />//6
                  <Route path='/FacturaAbierta' element={<FacturaAbierta />} />//8
                  <Route path='/login' element={<Login />} />

                  //SEMANA UNO
                  <Route path='/addPropina' element={<AddPropina />} />
                  <Route path='/primas' element={<Primas />} />
                  <Route path='/tipoPago' element={<SelectTipoPago />} />
                  <Route path='/dividirPago' element={<DividirPago />} />
                  <Route path='/ventasrapido' element={<VentasRapido />} />
                  <Route path='/citas' element={<CitasPage />} />
                  <Route path='/HistorialVentas' element={<HistorialVentas />} />
                  <Route path='/DatosFactura' element={<DatosFactura />} />
                  <Route path='/ListaClientes' element={<ListaClientes />} />
                  <Route path='/resenas' element={<Resenas />} />
                  <Route path='/formularios' element={<Formularios />} />
                  <Route path='/secciones' element={<Secciones />} />
                  <Route path='/historialServicios' element={<HistorialServicios />} />
                  <Route path='/ResumenInventario' element={<ResumenInventario />} />
                  
                  
                  
                  
            </Routes>
         </Layout>}
         {/*<Login />*/}
        
      </BrowserRouter>
      
   );
};

export default App; //Aquí estás haciendo que exporte de manera predeterminada App.
