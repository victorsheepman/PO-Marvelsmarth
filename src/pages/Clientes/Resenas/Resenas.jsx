import React from 'react'
import Card from 'react-bootstrap/Card';
export const Resenas = () => {
  return (
    <div className='resenas'>
        <header className='listaClientes__header'>
            <h3 className='ListaClientes' style={{color:'#f6c84c'}}>Reseñas</h3>
        </header>
        <span className='label--title ' style={{color:'#f6c84c', marginLeft:'6%'}}>
            Consulta, añade, edita y elimina informacion del cliente.
        </span>
        <div className='calendar__header' style={{padding:'unset'}}>
            <button className='calendar__button' style={{borderRadius:'30px', marginLeft:'5%'}}>
                Filtros
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
        <Card className='mx-auto'>
            <Card.Body className='d-flex  justify-content-center align-items-center' style={{flexDirection:'column'}}>
                <figure className='resenas__img'>
                    <img src="../../assets/images/estrella.png" />
                </figure>
                <h3 className='title-3' style={{fontSize:'35px'}}>
                    No hay reseñas
                </h3>
                <p className='label-title' style={{textAlign:'center', fontSize:'20px'}}>
                    Los usuarios registrados de MarvelSmarth <br />
                    pueden valorar la citas completadas, lo que <br />
                    impulsa tu perfil y anima a nuevos clientes <br />
                </p>
            </Card.Body>
        </Card>
    </div>
  )
}
