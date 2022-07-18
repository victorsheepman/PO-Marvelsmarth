import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { addHours } from 'date-fns'

const locales = {
  'en-US': enUS,
}

const events = [
    {
        title:'Cumpleanos',
        notes:'Hay que ir',
        start: new Date(),
        end: addHours(new Date(), 1),
        bgColor:'#fafafafafa',
        user:{
            __id:'123',
            name:'Fernando'
        }
    },
]

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export const MyCalendar = props => (
  <div style={{backgroundColor:'white'}}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)