import React from 'react'
import { Pago } from '../../Atoms/Pago'
import { FacturaCliente } from '../FacturaCliente/FacturaCliente';

export const SelectTipoPago = () => {
  //const [show, setShow] = useState(false)
  return (
    <div className='selectPago'>
        <section className='selectPago__form'>
            <div className='container d-flex '>
                <svg  xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#f6c84c" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                <h3 className='subtitle selectPago__form__title'>Seleccionar tipo de pago</h3>
                <svg style={{marginLeft:'25%'}} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 51" width="44" height="51"><defs><image  width="44" height="51" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAzCAMAAADb2hp9AAAAAXNSR0IB2cksfwAAArJQTFRF9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slM9slMOTTP9AAAAOZ0Uk5TAAs7dYx2RhVCiL7Pv5NJDS2m8P3+86QFAVPe/9wXbOrunCYOcenyoiVm5JkGIX2pMh5SicX4/NmUVisEAxMUToG3WSwIBxEMNl1fPDWK9+zWmxhEYljDrH9BTeHtVB0gS4ezxJhQ76tnuvT6d3y59kX709jf+fEf45Ax2svmpeu2a1dcaISw5+JlFlWaShACQI/gkTCC1NHNwXQntRxysmMZOMptW8bQbg+9LpYpIugSajOFG903Lyp6p3ijJFFzvAk5riiVzo5POnvIu6/bwmHMND8+i36eg2Cgn9X1CsflnXChktKbLBo0AAADsElEQVR4nGNgwACMTMwsrGzsmBJYACMHJxc3Dy8fPzGKBQSFhEWERcWYxAmrlZCUkgYBGVZZIlwhJw9WrKCoRFixsooqWLGaugYRztDUAisW0ibsDB1dPajJ+gaEfGhoZGxiClZsZm5haWWNocDG1g5ihrWGvYOjlrA0BIio8rA4ObuAZVzZ3STADHcPTy9vWxDLx5db1U8aAUz9AwI5dIASQcEhTgIgA5VC1cPCwiMilW2jFKOl0UFMeGxcfEJiUjJPSirQQGYuU2kR4bR0z4zMLAy10tLZPDm5eWoiItL5jgUuDFyFYMGsomJTLGqBqkuiS8GMMuZyhgpsKkSwiVVWMVRjmiUfUFNUi2FPIaczQ109qphCg3GjZ1NzS2tbO6pER2cXQ3ePKpKIcEVgb1+/RH9/P/+EieZIrjGbNHlKPwO/wdRpwnCx6czwWOsvl5tRCBPPnzlrNlhCI2NOGVR7dOtcpKhlnzcN6jf5+QsWQgVdncwhgkLai1ASQrwFNOgXL0EYkhAAEZMJdUFR3L90WTZYYvkKO5jYyhXREMWrVqOlsSkTY8AS8mvWwoTWTV0PFhINNERTvGEjJM780jdBRSScWSDZrmPzFjTF1k1bISHasA2mePtEiOJJDgvRFEsYyUAcmAn3+Q5fSLzIs8xFU+ziCSkXzJI8YEJbdkLyaPaudWiK43ZD4rxszxS4/gUQ/dI1TKhq+yfsEYX4xncvXHAfNFLWz7JDUew+r9oMkgrk+qBC4ob7SyCKTQ+EHkRWfOgwNClNyz0CybB9qUePwTKUWniwDULt9hR5qLhCzfEJIIl1TY75iJQov+fEXFdIELOf5EVK6gq7EtwZGE6tKpVGAvmnjRMMGcUPboncuUoNWcL0DJsrgwl6fqtoWNOa68B71hxNPH+nLrYMK2xmZiaMISpSuYnhHKZi7EDE15lhDySqq5PytLCqUT2fDJGQumDHsE+xTNjM7+L+I5c4t2IpLhTWXL6yubjUrFDrqlU/w4ZD164rcjoBk9ARlTwhdE+dvmHAwDD7ZuUt7RVTQEUkg/JepQ0SkOi5fUf1rhnMjX6qxeEXwMW/RNDa+HtoaYyBf7Xkjfkl0IDwX7XZ6ZItuhJkIFEeqg9JaNn3Nxra4FMKAgt3QzOkoBUhpQwMB+UegBWXPUTPNlgA/yNI8lF7TEQ9qBMCSZfrn6DnMWwg8j5Y8WmvPsJqGbaceppvalrRGk+EWmBt6Dnx9ppGKwliFAPji+lEZFw/FhkA/YcyrQNmbY4AAAAASUVORK5CYII="/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>
            </div>
            
            <div className='w-100 d-flex justify-content-between mt-3 flex-wrap' >
              <Pago 
                title='Efectivo'
                src='money.png'
              />
              <Pago 
                title='Transferencia'
                src='mobile.png'
              />
              <Pago 
                title='Tarjeta'
                src='card.png'
                bootstrap='mt-5'
              />
              <Pago 
                title='Dividir el pago'
                src='credit.png'
                bootstrap='mt-5'
              />
            </div>
        </section>
        <section className='selectPago__list'>
             <FacturaCliente />
        </section>
        {/*<div className='container-lg mt-3 d-flex justify-content-end'>
          <Button 
            variant="primary" 
            onClick={()=>setShow(true)}
          >
            Nuevo tiempo block
          </Button>
  </div>*/}
    </div>
  )
}
