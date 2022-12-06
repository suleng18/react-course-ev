import React from 'react';
import './App.scss';
import SidebarMenu from './components/SidebarMenu';
import useClickOutSide from './hooks/useClickOutSide';

function App() {
  const { show, setShow, nodeRef } = useClickOutSide('span');

  return (
    <div className="p-5">
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
      >
        Show Menu
      </span>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
    </div>
  );
}

export default App;
