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
import { Addsection } from './container/Addsection/Addsection';
import { Transferencia } from './container/Transferencias/Transferencia';
import { NuevaTransferencia } from './container/NuevaTransferencia/NuevaTransferencia';
import { Reposicion } from './container/Reposicion/Reposicion';
import { NuevoReposicion } from './container/NuevoReposicion/NuevoReposicion';
import { AjustesInventario } from './container/AjustesInventario/AjustesInventario';
import { NuevoAjusteInventario } from './container/NuevoAjusteInventario/NuevoAjusteInventario';
import { OrdenesDesecho } from './container/OrdenesDesecho/OrdenesDesecho';
import { NuevoOrdenesDesecho } from './container/NuevoOrdenesDesecho/NuevoOrdenesDesecho';
import { Productos } from './pages/Inventario/Productos/Productos';
import { NuevoProductos } from './container/NuevoProductos/NuevoProductos';
import { Ajustes } from './pages/Inventario/Configuracion/Ajustes/Ajustes';
import { Almacenes } from './pages/Inventario/Configuracion/Almacenes/Almacenes';
import { NuevoAlmacen } from './container/NuevoAlmacen/NuevoAlmacen';
import { Ubicaciones } from './pages/Inventario/Configuracion/Ubicaciones/Ubicaciones';
import { NuevoUbicacion } from './container/NuevoUbicacion/NuevoUbicacion';
import { TiposOperaciones } from './pages/Inventario/Configuracion/TiposOperaciones/TiposOperaciones';
import { NuevoTipoOperaciones } from './container/NuevoTipoOperaciones/NuevoTipoOperaciones';
import { ReglasEstrateguia } from './pages/Inventario/Configuracion/ReglasEstrateguia/ReglasEstrateguia';
import { NuevoReglasTraslado } from './container/NuevoReglasTraslado/NuevoReglasTraslado';
import { CategoriaProducto } from './pages/Inventario/Configuracion/CategoriaProducto/CategoriaProducto';
import { NuevoCategoria } from './container/NuevoCategoria/NuevoCategoria';
import { ReglasAbastecimiento } from './pages/Inventario/Configuracion/ReglasAbastecimiento/ReglasAbastecimiento';
import { NuevoReglasAbastecimiento } from './container/NuevoReglasAbastecimiento/NuevoReglasAbastecimiento';

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
                  <Route path='/Addsection' element={<Addsection />} />
                  <Route path='/transferencias' element={<Transferencia />} />
                  <Route path='/NuevaTransferencia' element={<NuevaTransferencia />} />

                  //SEMANA DOS
                  <Route path='/reposicion' element={ <Reposicion /> } />
                  <Route path='/nuevoreposicion' element={ <NuevoReposicion /> } />
                  <Route path='/ajustesInventario' element={ <AjustesInventario /> } />
                  <Route path='/nuevoAjustesInventario' element={ <NuevoAjusteInventario /> } />
                  <Route path='/ordenesDesecho' element={ <OrdenesDesecho /> } />
                  <Route path='/nuevoOrdenesDesecho' element={ <NuevoOrdenesDesecho /> } />
                  <Route path='/productos' element={ <Productos /> } />
                  <Route path='/nuevoProductos' element={ <NuevoProductos /> } />
                  <Route path='/ajustes' element={ <Ajustes /> } />
                  <Route path='/almacenes' element={<Almacenes />} />
                  <Route path='/nuevoAlmacenes' element={<NuevoAlmacen />} />
                  <Route path='/ubicaciones' element={<Ubicaciones />} />
                  <Route path='/nuevoUbicaciones' element={<NuevoUbicacion />} />
                  <Route path='/tiposOperaciones' element={<TiposOperaciones />} />
                  <Route path='/nuevoTipoOperaciones' element={<NuevoTipoOperaciones /> } />
                  <Route path='/reglasEstrateguia' element={<ReglasEstrateguia />} />
                  <Route path='/nuevoReglasTraslado' element={<NuevoReglasTraslado />} />
                  <Route path='/categoriaProducto' element={<CategoriaProducto />} />
                  <Route path='/nuevoCategoria' element={<NuevoCategoria />} />
                  <Route path='/reglasAbastecimiento' element={<ReglasAbastecimiento />} />
                  <Route path='/nuevoReglasAbastecimiento' element={<NuevoReglasAbastecimiento />} />

                  
                  
                 
                  
                  
            </Routes>
         </Layout>}
         {/*<Login />*/}
        
      </BrowserRouter>
      
   );
};

export default App; //Aquí estás haciendo que exporte de manera predeterminada App.
