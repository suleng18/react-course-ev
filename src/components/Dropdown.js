import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutDropdown);

    return () => {
      document.removeEventListener('click', handleClickOutDropdown);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
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
