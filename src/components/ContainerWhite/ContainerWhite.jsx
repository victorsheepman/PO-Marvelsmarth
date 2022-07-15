import React, { Children } from 'react'

export const ContainerWhite = ({children, bootstrap, sm=false, img, title, citas=false}) => {
  if (citas) {
    return(
      <div className={`${bootstrap} contentWhite--sm`}>
        <h3 className='title-3'>
            {title}
        </h3>
        {
          children
        }
      </div>
    ) 
  }
  
  
  
  
  if (sm) {
    return(
        <div className={`${bootstrap} contentWhite--sm`}>
            <h3 className='title-3'>
                {title}
            </h3>
            <figure className='contentWhite__image'>
                 <img src={`../../assets/images/${img}`} alt="" />
            </figure>
           
        </div>
    )
  }else{
    return (
        <div className={`${bootstrap} contentWhite`}>
             <h3 className='title-3'>
                {title}
            </h3>
            <figure className='contentWhite__image'>
                 <img src={`../../assets/images/${img}`} alt="" />
            </figure>
           
        </div>
    )
  }
    
}

 