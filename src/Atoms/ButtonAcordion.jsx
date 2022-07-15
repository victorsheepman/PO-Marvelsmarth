import React, { Children } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

function CustomToggle({ children, eventKey, classBoton}) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        className={classBoton}
        onClick={decoratedOnClick}
      >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f6c84c" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        {children}
      </button>
    );
  }







export const ButtonAcordion = ({children, title, style}) => {
  return (
    <Accordion defaultActiveKey="0">
        <CustomToggle eventKey="0" classBoton={style}>
            {title}
        </CustomToggle>
        <Accordion.Collapse eventKey="0">
            {children}
        </Accordion.Collapse>
    </Accordion>
  );
}
