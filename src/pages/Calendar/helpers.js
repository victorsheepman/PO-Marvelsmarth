import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import esES from 'date-fns/locale/es';


export const user = [
    {
      user:'Wanda',
      letra:'W'
    },
    {
      user:'Pamela',
      letra:'P'
    },
    {
      user:'Victoria',
      letra:'V'
    },
    {
      user:'Victoria',
      letra:'V'
    },
    {
      user:'Jhonny',
      letra:'J'
    },
    {
      user:'Eliana',
      letra:'E'
    }, 
    {
      user:'Mell',
      letra:'M'
    },
    {
      user:'Genesis',
      letra:'G'
    },
    {
      user:'Michel',
      letra:'M'
    },
    {
      user:'Stalin',
      letra:'S'
    }
]



const locales = {
  'es': esES,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const getMessagesES = () => {
  return{
      allDay: 'Todo el día',
      previous: '<',
      next: '>',
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
      agenda: 'Agenda',
      date: 'Fecha',
      time: 'Hora',
      event: 'Evento',
      noEventsInRange: 'No hay eventos en este rango',
      showMore: total => `+ Ver más (${total})`
  };
}