import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const TextareaAutoResize = () => {
  const [text, setText] = useState('demo');
  const [textHeight, setTextHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setTextHeight('auto');
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };

  useEffect(() => {
    setTextHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5" style={{ minHeight: parentHeight }}>
      <textarea
        className="w-full overflow-hidden max-w-[400px] p-5 rounded-lg border focus:border-blue-500 border-gray-400 resize-none"
        placeholder="Please your name "
        value={text}
        ref={textareaRef}
        style={{
          height: textHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
