import React, { useState } from 'react';
import useToogle from './useToggle';

const Editable = () => {
  const { value: edit, handleToggleValue } = useToogle();

  return (
    <div>
      {edit && <input className="p-3 rounded-lg border border-gray-500" type="text" />}
      <button onClick={handleToggleValue}>Open Edit</button>
    </div>
  );
};

export default Editable;
