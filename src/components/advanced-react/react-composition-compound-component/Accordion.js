import React from 'react';
import useToogle from './useToggle';

const Accordion = () => {
  const { value: show, handleToggleValue } = useToogle();
  return (
    <>
      <div className="header cursor-pointer" onClick={handleToggleValue}>
        Accordion header
        <span>+</span>
      </div>
      {show && <div className="content">Accordion content</div>}
    </>
  );
};
// 244

export default Accordion;
