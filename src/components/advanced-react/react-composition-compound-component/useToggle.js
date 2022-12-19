import { useState } from 'react';

export default function useToogle() {
  const [value, setValue] = useState(false);
  const handleToggleValue = () => {
    setValue((previous) => !previous);
  };

  return {
    value,
    handleToggleValue,
  };
}
