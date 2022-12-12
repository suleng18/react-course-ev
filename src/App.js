import React, { Fragment, useState } from 'react';
import './App.scss';
import DropdownPortal from './components/DropdownPortal';
import Modal from './components/modal/Modal';
import Tooltip from './components/tooltip/Tooltip';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 m-5 text-white bg-blue-500 rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, harum. Nihil voluptatibus
        aperiam, ad autem necessitatibus debitis quia reprehenderit dicta numquam ea est. Suscipit
        obcaecati ea sint at vero veritatis!
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      <div className="p-16 mt-16 ml-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div>
    </Fragment>
  );
}

export default App;
// 173
