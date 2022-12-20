import React from 'react';
import { useAccordion } from './accordion-context';

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();

  return (
    <>
      {show && <div className="content p-4 border rounded-lg border-gray-300 mt-2">{children}</div>}
    </>
  );
};

export default AccordionContent;
