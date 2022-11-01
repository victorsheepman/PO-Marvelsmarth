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
import { OrdenesProduccion } from './pages/Fabricacion/Operaciones/OrdenesProduccion';
import { CategoriasUdm } from './pages/Inventario/CategoriasUdm/CategoriasUdm';
import { NuevoUdm } from './container/NuevoUdm/NuevoUdm';
import { NuevoOrdenProduccion } from './container/NuevoOrdenProduccion/NuevoOrdenProduccion';
import { OrdenesDescontruccion } from './pages/Fabricacion/OrdenesDescontruccion/OrdenesDescontruccion';
import { NuevoDestruccion } from './container/NuevoDestruccion/NuevoDestruccion';
import { Desechar } from './pages/Fabricacion/Desechar/Desechar';
import { ProductosFabricacion } from './pages/Fabricacion/Productos/Productos';
import { VarianteProducto } from './container/VarianteProducto/VarianteProducto';
import { ListaMateriales } from './container/ListaMateriales/ListaMateriales';
import { NuevoListaMateriales } from './container/NuevoListaMateriales/NuevoListaMateriales';
import { Lotes } from './container/Lotes/Lotes';
import { NuevoLotes } from './container/NuevoLotes/NuevoLotes';
import { OrdenesProduccionInforme } from './pages/Fabricacion/Informes/OrdenesProduccion/OrdenesProduccion';
import { AnalisisProduccion } from './pages/Fabricacion/Informes/AnalisisProduccion/AnalisisProduccion';
import { AjustesFab } from './pages/Fabricacion/Configuracion/AjustesFab';
import { Configuracion } from './pages/Configuracion/Configuracion';
import { ConfigEmpresa } from './pages/ConfigEmpresa/ConfigEmpresa';
import { AjustesHora } from './pages/Herreria/AjustesHora/AjustesHora';
import { AjustesIdioma } from './pages/Herreria/AjustesIdioma/AjustesIdioma';
import { ClientesHerr } from './pages/Herreria/ClientesHerr/ClientesHerr';
import { RazonCancelacion } from './pages/Herreria/RazonCancelacion/RazonCancelacion';
import { Referencia } from './pages/Herreria/Referencia/Referencia';
import { NotificacionCliente } from './pages/Herreria/NotificacionCliente/NotificacionCliente';
import { ClientesSer } from './pages/Herreria/ClientesSer/ClientesSer';
import { MenuServicios } from './pages/Herreria/MenuServicios/MenuServicios';
import { AddServicio } from './pages/Herreria/AddServicio/AddServicio';
import { CentroCosto } from './pages/Herreria/CentroCosto/CentroCosto';
import { DetallesServ } from './pages/Herreria/DetallesServ/DetallesServ';
import { NuevoServ } from './components/NuevoServ';
import { NuevoPaquete } from './components/NuevoPaquete';
import { Usuarios } from './pages/Herreria/Usuarios/Usuarios';
import { NuevoMiembroEquipo } from './container/NuevoMiembroEquipo/NuevoMiembroEquipo';
import { TerminosPago } from './pages/Herreria/TerminosPago/TerminosPago';
import { NumeracionDoc } from './pages/Herreria/NumeracionDoc/NumeracionDoc';
import { ConfigFacturas } from './pages/Herreria/ConfigFacturas/ConfigFacturas';
import { Vendedores } from './pages/Herreria/Vendedores/Vendedores';
import { ConfigPantallas } from './pages/Herreria/ConfigPantallas/ConfigPantallas';
import { Impuestos } from './pages/Herreria/Impuestos/Impuestos';
import { Retenciones } from './pages/Herreria/Retenciones/Retenciones';
import { ReportesFisc } from './pages/Herreria/ReportesFisc/ReportesFisc';
import { FechaUpdate } from './pages/Herreria/FechaUpdate/FechaUpdate';
import { EditNotifi } from './pages/Herreria/EditNotifi/EditNotifi';
import { PlantillaCorreos } from './pages/Herreria/PlantillaCorreos/PlantillaCorreos';
import { CamposAdd } from './pages/Herreria/CamposAdd/CamposAdd';
import { ApiIntegration } from './pages/Herreria/ApiIntegration/ApiIntegration';
import { PagoLinea } from './pages/Herreria/PagoLinea/PagoLinea';
import { Centros } from './pages/Herreria/Centros/Centros';
import { ModelosActivos } from './pages/Herreria/ModelosActivos/ModelosActivos';
import { NuevoModeloActivo } from './container/NuevoModeloActivo/NuevoModeloActivo';
import { FechasCerradas } from './pages/Herreria/FechasCerradas/FechasCerradas';
import { Equipo } from './pages/Herreria/Equipo/Equipo';
import { HorarioLaboral } from './pages/Herreria/HorarioLaboral/HorarioLaboral';
import { Comisiones } from './pages/Herreria/Comisiones/Comisiones';
import { ProgramaLealtad } from './pages/Herreria/ProgramaLealtad/ProgramaLealtad';
import { NuevoLealtad } from './container/NuevoLealtad/NuevoLealtad';
import { CrearRecompensa } from './pages/Herreria/CrearRecompensa/CrearRecompensa';
import { CrearRegla } from './pages/Herreria/CrearRegla/CrearRegla';
import { ListaEspera } from './pages/Herreria/ListaEspera/ListaEspera';
import { CatalogoCuenta } from './pages/Contabilidad/CatalogosCuenta/CatalogoCuenta';
import { EntradasDiario } from './pages/Contabilidad/EntradasDiario/EntradasDiario';
import { LibroDiario } from './pages/Contabilidad/LibroDiario/LibroDiario';
import { ReportesContables } from './pages/Contabilidad/ReportesContables/ReportesContables';
import { Bancos } from './pages/Contabilidad/Bancos/Bancos';
import { Presupuesto } from './pages/Ventas/Presupuesto/Presupuesto';
import { NuevoProveedor } from './container/NuevoProveedor/NuevoProveedor';
import { FacturaProveedores } from './container/FacturaProveedores/FacturaProveedores';
import { FacturaProveedoresClientes } from './container/FacturaProveedores/FacturasProveedoresClientes';
import { LibroMayor } from './container/FacturaProveedores/LibroMayor';
import { Permisos } from './pages/Herreria/Permisos/Permisos';
import { PresupuestoEmpty } from './container/Presupuesto/Presupuesto';
import { DatosFacturacion } from './container/DatosFacturacion/DatosFacturacion';
import { ImpresionCuadre } from './container/ImpresionCuadre/ImpresionCuadre';
import { Roles } from './pages/Herreria/Roles/Roles';
import { UsuarioRol } from './pages/Herreria/UsuariosRol/UsuarioRol';

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
                  //8
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
                  <Route path='/reglasEstrategias' element={<ReglasEstrateguia />} />
                  <Route path='/nuevoReglasTraslado' element={<NuevoReglasTraslado />} />
                  <Route path='/categoriaProducto' element={<CategoriaProducto />} />
                  <Route path='/nuevoCategoria' element={<NuevoCategoria />} />
                  <Route path='/reglasAbastecimiento' element={<ReglasAbastecimiento />} />
                  
                  //SEMANA TRES
                  <Route path='/nuevoReglasAbastecimiento' element={<NuevoReglasAbastecimiento />} />
                  
                  <Route path='/categoriasUdm' element={<CategoriasUdm />} />
                  <Route path='/nuevoUdm' element={<NuevoUdm />} />
                
                  <Route path='/ordenesDescontruccion' element={<OrdenesDescontruccion />} />
                  <Route path='/nuevoDestruccion' element={<NuevoDestruccion />} />
                  <Route path='/desechar' element={<Desechar />} />
                  <Route path='/productosFabricacion' element={<ProductosFabricacion />} />
                  <Route path='/varianteProducto' element={<VarianteProducto />} />
                  <Route path='/listaMateriales' element={<ListaMateriales />} />
                  <Route path='/nuevoListaMateriales' element={<NuevoListaMateriales />} />
                  <Route path='/lotes' element={<Lotes />} />
                  <Route path='/nuevoLotes' element={<NuevoLotes />} />
                  <Route path='/ordenesProduccionInforme' element={<OrdenesProduccionInforme />} />
                  <Route path='/analisisProduccion' element={<AnalisisProduccion />} />
                  <Route path='/ajustesFab' element={<AjustesFab />} />
                  <Route path='/configuracion' element={<Configuracion />} />
                  <Route path='/configEmpresa' element={<ConfigEmpresa />} />                  
                  <Route path='/ajustesHora' element={<AjustesHora />} />
                  <Route path='/ajustesIdioma' element={<AjustesIdioma />} />
                  <Route path='/clientesHerr' element={<ClientesHerr />} />                  
                  
                  //SEMANA CUARTRO 
                  <Route path='/razonCancelacion' element={<RazonCancelacion />} /> 
                  <Route path='/referencia' element={<Referencia />} /> 
                  <Route path='/notificacionCliente' element={<NotificacionCliente />} />
                  <Route path='/clienteSer' element={<ClientesSer />} /> 
                  <Route path='/menuServicios' element={<MenuServicios />} />
                  <Route path='/addServicio' element={<AddServicio />} />
                  <Route path='/centroCosto' element={<CentroCosto />} /> 
                  <Route path='/detallesServ' element={<DetallesServ />} />
                  <Route path='/nuevoServ' element={<NuevoServ />} /> 
                  <Route path='/nuevoPaquete' element={<NuevoPaquete />} />
                  <Route path='/usuarios' element={<Usuarios />} />  
                  <Route path='/nuevoMiembroEquipo' element={<NuevoMiembroEquipo />} /> 
                  <Route path='/terminosPago' element={<TerminosPago />} />

                  //SEMANA Cinco   
                  <Route path='/numeracionDoc' element={<NumeracionDoc />} />
                  <Route path='/configFacturas' element={<ConfigFacturas />} /> 
                  <Route path='/vendedores' element={<Vendedores />} /> 
                  <Route path='/configPantallas' element={<ConfigPantallas />} /> 
                  <Route path='/impuestos' element={<Impuestos />} />
                  <Route path='/retenciones' element={<Retenciones />} /> 
                  <Route path='/reportesFisc' element={<ReportesFisc />} />
                  <Route path='/fechaUpdate' element={<FechaUpdate />} /> 

                  <Route path='/editarNotificacion' element={<EditNotifi />} /> 
                  <Route path='/plantillaCorreos' element={<PlantillaCorreos  />} /> 
                  <Route path='/camposAdd' element={<CamposAdd  />} />
                  <Route path='/apiIntegration' element={<ApiIntegration  />} /> 
                  <Route path='/pagoLinea' element={<PagoLinea  />} />
                  <Route path='/centros' element={<Centros  />} />
                  
                  <Route path='/modelosActivos' element={<ModelosActivos  />} />
                  <Route path='/nuevoModeloActivo' element={<NuevoModeloActivo  />} />
                  <Route path='/fechasCerradas' element={<FechasCerradas  />} />
                  <Route path='/equipo' element={<Equipo  />} />
                  <Route path='/horarioLaboral' element={<HorarioLaboral />} />
                  <Route path='/comisiones' element={<Comisiones />} />
                  <Route path='/programaLealtad' element={<ProgramaLealtad />} />
                  <Route path='/nuevoLealtad' element={<NuevoLealtad />} />
                  <Route path='/crearRecompensa' element={<CrearRecompensa />} />
                  <Route path='/crearRegla' element={<CrearRegla />} />
                  <Route path='/listaEspera' element={<ListaEspera />} />
                  <Route path='/catalogoCuenta' element={<CatalogoCuenta />} />
                  <Route path='/entradasDiario' element={<EntradasDiario />} />
                  <Route path='/libroDiario' element={<LibroDiario />} />

                  <Route path='/reportesContables' element={<ReportesContables />} />
                  <Route path='/Bancos' element={<Bancos />} />
                  <Route path='/Presupuesto' element={<Presupuesto />} />
                  <Route path='/nuevoProveedor' element={<NuevoProveedor />} />
                  <Route path='/facturaProveedores' element={<FacturaProveedores />} />
                  <Route path='/facturaProveedoresClientes' element={<FacturaProveedoresClientes />} />
                  <Route path='/LibroMayor' element={<LibroMayor />} />
                 
                 

                  //REstantes
                  <Route path='/ordenesProduccion' element={<OrdenesProduccion />} />
                  <Route path='/nuevoOrdenProduccion' element={<NuevoOrdenProduccion/>} />
                  <Route path='/Presupuesto' element={<Presupuesto />} />
                  <Route path='/FacturaAbierta' element={<FacturaAbierta />} />  
                   <Route path='/DatosFacturacion' element={<DatosFacturacion />} />
                  <Route path='/ImpresionCuadre' element={<ImpresionCuadre />} />
                  <Route path='/Roles' element={<Roles />} />
                  <Route path='/UsurioRoles' element={<UsuarioRol />} />
                   <Route path='/Permisos' element={<Permisos />} />
                  <Route path='/PresupuestoEmpty' element={<PresupuestoEmpty />} />

                  
                  
                  

                  

                  
         
                  
                  



                  
                  
                   

                  

                   
                  
                  

                  
                  
                  
                  


                  
                  
                  
                  

                  
                   
                  

                   
                  
                 
            </Routes>
         </Layout>}
         {/*<Login />*/}
        
      </BrowserRouter>
      
   );
};

export default App; //Aquí estás haciendo que exporte de manera predeterminada App.
