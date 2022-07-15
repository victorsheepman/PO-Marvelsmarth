import React from 'react'

export const UserCalendar = ({letra='M', user="Manuel"}) => {
  return (
    <div className='usercalendar'>
        <div className='usercalendar__profile'>
            <h1>
                {letra}
            </h1>
        </div>
        <p>
            {user}
        </p>
    </div>
  )
}
