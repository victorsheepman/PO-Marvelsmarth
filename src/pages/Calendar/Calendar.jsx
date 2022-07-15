import React from 'react'
import { ButtonAcordion } from '../../Atoms/ButtonAcordion'
import { UserCalendar } from '../../components/UserCalendar/UserCalendar'
import { Agenda } from '../../container/Agenda/Agenda'

const Calendar = () => {
  return (
    <div className='calendar'>
        <section className='calendar__header'>
          <button className='calendar__button'>
            Todos
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
          </button>
          <button className='calendar__button--md'>
            HOY jueves 12 may, 2022
          </button>
          <div className='calendar__content'>
            <button className='calendar__button--sm'>
              dia 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <ButtonAcordion title={'Añadir'} style='calendar__button--black' >
              <ul className='calendar__submenu mt-3 animate__animated animate__fadeIn' >
                <li>
                    <p>Nueva cita</p>
                </li>
                <li>
                  <p>
                    Nuevo tiempo bloqueado
                  </p>
                </li>
                <li>
                  <p>
                    Nueva venta
                  </p>
                </li>
              </ul>
            </ButtonAcordion>
          </div>
        </section>
        <section className='w-100 d-flex p-3 justify-content-between' style={{backgroundColor:'#e6e6e9' }}>
          <UserCalendar 
            user='Wanda'
            letra='W'
          />
          <UserCalendar 
            user='Pamela'
            letra='P'
          />
          <UserCalendar 
            user='Victoria'
            letra='V'
          />
          <UserCalendar 
            user='Jhonny'
            letra='J'
          />
          <UserCalendar 
            user='Eliana'
            letra='E'
          />
          <UserCalendar 
            user='Mell'
            letra='M'
          />
          <UserCalendar 
            user='Genesis'
            letra='G'
          />
          <UserCalendar 
            user='Michel'
            letra='M'
          />
          <UserCalendar 
            user='Stalin'
            letra='S'
          />

        </section>
        <Agenda />
    </div>
  )
}

export default Calendar