import { createContext, useContext } from 'react';
import useToogle from './useToggle';

const AccordionContext = createContext();

function AccordionProvider(props) {
  const { value: show, handleToggleValue: handleToggleShow } = useToogle();

  const values = { show, handleToggleShow };

  return <AccordionContext.Provider value={values} {...props}></AccordionContext.Provider>;
}

function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === 'undefined')
    throw new Error('useAccordion must be within AccordionProvider');

  return context;
}

export { useAccordion, AccordionProvider };
