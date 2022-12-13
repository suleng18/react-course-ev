// 1. Tạo component có tên là Tooltip
// 2. Component này có props children, props text
// 3. Áp dụng portal để khi rê chuột vào text thì sẽ hiển thị tooltip content ở phía trên, và chính giữa đoạn text
// 4. Dùng kiến thức đã học ở video trước sử dụng getBoundingClientRect()
import React, { useState } from 'react';
import useHover from '../../hooks/useHover';
import ReactDOM from 'react-dom';

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};

const TooltipContent = ({ children, coords }) => {
  console.log('🚀 ~ coords', coords);
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white -translate-y-full -translate-x-2/4 bg-black rounded-xl max-w-[200px]"
      style={{
        top: `${coords.top - coords.height / 2 + window.screenY}px`,
        left: `${coords.left + coords.width / 2}px`,
      }}
    >
      {children}
    </p>,
    document.querySelector('body'),
  );
};

export default Tooltip;
// 177
