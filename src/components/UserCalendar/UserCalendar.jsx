import React from 'react'

export const UserCalendar = ({letra='M', user="Manuel", flex=false}) => {
  
  if (flex) {
    return (
      <div className='usercalendar--flex'>
          <div className='usercalendar__profile--flex'>
              <h1>
                  {letra}
              </h1>
          </div>
          <div className='usercalendar__name'>
            <p>
              {user}
            </p>
          </div>
          
      </div>
    )
  }else{
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
  
}
