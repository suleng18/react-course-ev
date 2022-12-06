import React from 'react';
import useClickOutSide from '../hooks/useClickOutSide';

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div className="relative w-full max-w-[500px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white p-5 border border-gray-200 rounded-lg">
          <div className="py-3 cursor-pointer border-b border-b-gray-200">Reacjs</div>
          <div className="py-3 cursor-pointer border-b border-b-gray-200">HTML</div>
          <div className="py-3 cursor-pointer ">CSS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
