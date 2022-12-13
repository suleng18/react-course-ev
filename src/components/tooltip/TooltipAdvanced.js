import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from '../Portal';

const TooltipAdvanced = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };

  const handleMouseLeave = (e) => {
    setVisible(false);
  };

  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} timeout={350} classNames="fade" unmountOnExit>
        {(status) => (
          <Portal overlay={false} visible={status !== 'exited'}>
            <p
              className="tooltip transition-all z-[9999] absolute inline-block p-3 text-white -translate-y-full -translate-x-2/4 bg-black rounded-xl max-w-[200px]"
              style={{
                top: `${coords.top - coords.height / 2 + window.screenY}px`,
                left: `${coords.left + coords.width / 2}px`,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvanced;
